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

  const { driver_name, phone, company_name, resend_only } = body;
  if (!phone) {
    return { statusCode: 400, body: JSON.stringify({ error: 'phone required' }) };
  }

  const SB_URL = 'https://zyoszbmahxnfcokuzkuv.supabase.co';
  const SB_KEY = process.env.SUPABASE_SERVICE_KEY;

  // Step 1: Pre-register driver (skip if resend_only)
  if (!resend_only && driver_name) {
    await fetch(`${SB_URL}/rest/v1/drivers`, {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'apikey':         SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`,
        'Prefer':         'resolution=ignore-duplicates,return=minimal',
      },
      body: JSON.stringify({
        driver_name,
        phone,
        company_name: company_name || null,
        is_verified:         false,
        availability_status: 'offline',
      }),
    }).catch(() => {});
  }

  // Step 2: Send OTP via Supabase edge function
  const otpRes = await fetch(`${SB_URL}/functions/v1/send-driver-otp`, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${SB_KEY}`,
    },
    body: JSON.stringify({ phone }),
  });

  if (!otpRes.ok) {
    const err = await otpRes.text();
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err }),
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true }),
  };
};
