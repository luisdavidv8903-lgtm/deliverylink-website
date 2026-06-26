/**
 * DELIVERYLINK LLC - Chat API Proxy
 * Cloudflare Pages Function: /api/chat
 * Variable requerida: ANTHROPIC_API_KEY (Secret en Cloudflare)
 */
export async function onRequestPost(context) {
  const { request, env } = context
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, anthropic-version',
  }
  if (!env.ANTHROPIC_API_KEY) {
    return Response.json({ error: { message: 'Server not configured.' } }, { status: 500, headers: cors })
  }
  const body = await request.text()
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: body,
  })
  const data = await res.text()
  return new Response(data, { status: res.status, headers: { ...cors, 'content-type': 'application/json' } })
}
export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, anthropic-version' } })
}
