exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { contact_name, phone, inquiry_type, page, referrer, message } = body;
  if (!contact_name || !phone || !inquiry_type) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
  }

  const SB_URL = 'https://zyoszbmahxnfcokuzkuv.supabase.co';
  const SB_KEY = process.env.SUPABASE_SERVICE_KEY;

  const res = await fetch(`${SB_URL}/rest/v1/marketing_leads`, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'apikey':         SB_KEY,
      'Authorization': `Bearer ${SB_KEY}`,
      'Prefer':         'resolution=ignore-duplicates,return=minimal',
    },
    body: JSON.stringify({ contact_name, phone, inquiry_type, page, referrer, message }),
  });

  if (!res.ok && res.status !== 409) {
    const err = await res.text();
    return { statusCode: 500, body: JSON.stringify({ error: err }) };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true }),
  };
};
