// Vercel Serverless Function: Forward transmission to Ahmed's Telegram
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { sender, message, hp } = req.body || {};

    // Honeypot anti-spam check
    if (hp) {
      return res.status(200).json({ success: true });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message cannot be empty.' });
    }

    const cleanMessage = message.trim().slice(0, 1500);
    const cleanSender = sender && typeof sender === 'string' && sender.trim().length > 0 
      ? sender.trim().slice(0, 100) 
      : 'Anonymous';

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8983116861:AAHYR42I9LWRRj8v5fglO6YWZ-p0WAr9t2Q';
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '8196296723';

    const now = new Date();
    const cairoTime = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Cairo',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
      day: '2-digit', month: 'short', year: 'numeric'
    }).format(now);

    function escapeHtml(str) {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    const text = `📬 <b>New Transmission from ahmedwalid.space</b>\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 <b>From:</b> ${escapeHtml(cleanSender)}\n` +
      `💬 <b>Message:</b>\n` +
      `<i>${escapeHtml(cleanMessage)}</i>\n\n` +
      `🕒 <code>${cairoTime} (Cairo)</code>`;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const tgRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      })
    });

    const tgData = await tgRes.json();
    if (!tgData.ok) {
      console.error('Telegram API error:', tgData);
      return res.status(500).json({ error: 'Failed to deliver transmission to Telegram.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Internal handler error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
