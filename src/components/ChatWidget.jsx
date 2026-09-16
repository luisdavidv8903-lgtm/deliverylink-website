import { useState, useEffect, useRef, useCallback } from 'react'
import { X, Users, MessageCircle, Send } from 'lucide-react'

// ─── Claude API Chat / Chat con Claude API ───
// NOT modified in Phase 2 (Delivery/Logistics expansion) — chat backend and
// model selection are explicitly out of scope for this phase. See
// CHAT_BACKEND_AUDIT.md for the open questions around this widget.
const CHAT_MODEL = 'claude-sonnet-4-6'
const MAX_TOKENS = 1000
// Defaults to the same-origin Pages Function/Worker route. Override at build
// time with VITE_CHAT_API_URL if the Worker is deployed to a workers.dev URL.
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || '/api/chat'

const SYSTEM_PROMPT = `You are the virtual assistant for DELIVERYLINK LLC, a Florida-based IT consulting and software development company. Respond in English by default. Switch to Spanish immediately if the user writes in Spanish or requests it.

COMPANY INFO:
- Owner: Luis David Vergara
- Location: Loxahatchee, FL 33470
- Phone: (561) 679-0314
- Email: ldvh@deliverylinktech.com
- Website: deliverylinktech.com
- SAM.gov UEI: JK4YVQB7DZ24 | CAGE: 21GG9
- Business: Small Business, Hispanic American-Owned
- NAICS: 541511, 541512, 541513, 541519, 541619

SERVICES & RATES:
- IT Consulting: $95-$125/hr
- Custom Software Development: $95-$145/hr
- Web Development & Modernization: $95/hr
- AI/LLM Integration: $125-$165/hr
- Government Procurement Consulting: $95/hr

TECHNICAL PORTFOLIO (internal/personal projects — not government past performance):
- FinAdvisor Pro: AI financial platform (Claude API, TLS 1.3, RBAC, cloud deployment)
- SAM.gov Intelligence Platform: automated federal opportunity monitoring, 60+ daily API searches

YOUR 4 TASKS:
1. Answer questions about DELIVERYLINK services
2. Collect leads: name, company, email, phone, project description — show summary when complete
3. Provide general pricing guidance
4. Schedule callback requests with preferred date/time

CERTIFICATIONS (only claim these):
- CAGE Code: 21GG9
- Hispanic American-Owned Small Business (Registered Florida MFMP Vendor)
- Google IT Support Professional Certificate
- DO NOT claim active/current SAM.gov registration status — it has not been verified
- DO NOT claim Section 508 compliance as a certification
- DO NOT claim SDB certification`

const WELCOME_MSG = `Hi! I'm the DELIVERYLINK LLC virtual assistant. I can help you learn about our IT services, get pricing information, or schedule a callback with Luis.\n\nHow can I help you today?\n\n_(Para español, escribe 'español')_`

// ─── Chat Widget Component / Componente del Chat ───
export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [leads, setLeads] = useState([])
  const [showLeads, setShowLeads] = useState(false)
  const [pulse, setPulse] = useState(true)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    try { setLeads(JSON.parse(localStorage.getItem('deliverylink_leads') || '[]')) } catch {}
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: WELCOME_MSG }])
    }
    if (open) {
      setPulse(false)
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open])

  const saveLead = useCallback((leadData) => {
    const entry = { ...leadData, timestamp: new Date().toLocaleString() }
    const updated = [...leads, entry]
    setLeads(updated)
    localStorage.setItem('deliverylink_leads', JSON.stringify(updated))
  }, [leads])

  const extractLead = useCallback((text) => {
    const patterns = {
      Name: /(?:name|nombre)[:\s]+([^\n,]+)/i,
      Company: /(?:company|empresa|organization)[:\s]+([^\n,]+)/i,
      Email: /(?:email|correo)[:\s]+([\w.+-]+@[\w.-]+)/i,
      Phone: /(?:phone|tel[eé]fono|number)[:\s]+([\d().\s+-]+)/i,
      Project: /(?:project|proyecto|description|descripci[oó]n)[:\s]+([^\n]+)/i,
    }
    const lead = {}
    let count = 0
    for (const [key, regex] of Object.entries(patterns)) {
      const match = text.match(regex)
      if (match) { lead[key] = match[1].trim(); count++ }
    }
    return count >= 3 ? lead : null
  }, [])

  // Send message to Claude API / Enviar mensaje a Claude API
  const queryClaude = useCallback(async (allMessages) => {

    const res = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: CHAT_MODEL,
        max_tokens: MAX_TOKENS,
        system: SYSTEM_PROMPT,
        messages: allMessages,
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.error?.message || `API error ${res.status}`)
    }

    const data = await res.json()
    return data.content?.[0]?.text || 'No response received.'
  }, [])

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const reply = await queryClaude(newMessages)
      const assistantMsg = { role: 'assistant', content: reply }
      const lead = extractLead(reply)
      if (lead) {
        assistantMsg.lead = lead
        saveLead(lead)
      }
      setMessages(prev => [...prev, assistantMsg])
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `⚠️ ${err.message}`
      }])
    } finally {
      setLoading(false)
    }
  }, [input, messages, loading, queryClaude, extractLead, saveLead])

  return (
    <div className="no-print">
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-5 w-[360px] max-w-[calc(100vw-32px)] h-[500px] max-h-[calc(100vh-120px)] rounded-2xl overflow-hidden flex flex-col shadow-2xl bg-white z-[9998]"
          style={{ animation: 'dlSlideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-dark to-brand flex items-center gap-3 px-4 py-3.5 min-h-[56px]">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="text-white font-bold text-[15px]">DELIVERYLINK Assistant</div>
              <div className="text-white/75 text-xs">Online • EN/ES</div>
            </div>
            {leads.length > 0 && (
              <button onClick={() => setShowLeads(true)}
                aria-label={`View ${leads.length} saved lead${leads.length === 1 ? '' : 's'}`}
                className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold rounded-lg px-2.5 py-1.5 transition">
                <Users size={14} aria-hidden="true" /> {leads.length}
              </button>
            )}
            <button onClick={() => setOpen(false)} aria-label="Close chat"
              className="w-8 h-8 flex items-center justify-center bg-white/15 hover:bg-white/25 rounded-lg transition">
              <X size={18} className="text-white" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto py-3 bg-gradient-to-b from-slate-50 to-white">
            {messages.map((msg, i) => (
              <div key={i} className={`flex mb-2.5 px-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed shadow-sm whitespace-pre-wrap break-words ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-brand-dark to-brand text-white rounded-2xl rounded-br-sm'
                    : 'bg-slate-100 text-slate-800 rounded-2xl rounded-bl-sm'
                }`}>
                  {msg.content}
                  {msg.lead && (
                    <div className="mt-2 p-3 bg-blue-50/80 rounded-xl border border-brand/20 text-xs">
                      <div className="font-bold text-brand-dark mb-1">📋 Lead Captured</div>
                      {Object.entries(msg.lead).map(([k, v]) => (
                        <div key={k}><strong className="text-brand-dark">{k}:</strong> {v}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-1 px-4 py-3 items-center">
                {[0, 1, 2].map(i => (
                  <span key={i} className="w-2 h-2 rounded-full bg-brand inline-block"
                    style={{ animation: 'dlBounce 1.4s infinite ease-in-out both', animationDelay: `${i * 0.16}s` }} />
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 border-t border-slate-200 bg-white items-end">
            <textarea ref={inputRef} value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
              placeholder="Type a message... / Escribe un mensaje..."
              aria-label="Type a message"
              rows={1}
              className="flex-1 border-1.5 border-slate-200 focus:border-brand rounded-xl px-3.5 py-2.5 text-sm resize-none outline-none max-h-20 overflow-y-auto font-[inherit]"
            />
            <button onClick={sendMessage} disabled={!input.trim() || loading} aria-label="Send message"
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition disabled:opacity-30 bg-blue-50 hover:bg-blue-100">
              <Send size={18} className="text-brand-dark" aria-hidden="true" />
            </button>
          </div>

          {/* Leads panel */}
          {showLeads && (
            <div className="absolute inset-0 bg-white z-10 flex flex-col rounded-2xl">
              <div className="bg-gradient-to-r from-brand-dark to-brand px-5 py-4 flex justify-between items-center rounded-t-2xl">
                <span className="text-white font-bold">Saved Leads ({leads.length})</span>
                <button onClick={() => setShowLeads(false)}
                  className="bg-white/20 hover:bg-white/30 text-white text-sm rounded-lg px-3 py-1 transition">← Back</button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {leads.length === 0 && <p className="text-slate-400 text-center mt-10">No leads yet</p>}
                {leads.map((lead, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-3.5 mb-3 border border-slate-200 text-sm">
                    <div className="font-bold text-brand-dark mb-1">Lead #{i + 1} — {lead.timestamp}</div>
                    {Object.entries(lead).filter(([k]) => k !== 'timestamp').map(([k, v]) => (
                      <div key={k}><strong>{k}:</strong> {v}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* FAB */}
      <button onClick={() => setOpen(p => !p)} aria-label={open ? 'Close chat' : 'Open chat'} aria-expanded={open}
        className="fixed bottom-5 right-4 sm:right-5 w-[60px] h-[60px] rounded-full border-none cursor-pointer z-[9999] bg-gradient-to-br from-brand-dark to-brand shadow-lg flex items-center justify-center transition-transform"
        style={{
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          animation: pulse ? 'dlPulse 2s infinite' : 'none',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
        {open ? <X size={26} className="text-white" aria-hidden="true" /> : <MessageCircle size={26} className="text-white" aria-hidden="true" />}
      </button>
    </div>
  )
}
