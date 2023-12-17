import { NextResponse } from "next/server";

const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_TOKEN
const client = require('twilio')(accountSid, authToken);

export async function POST(request) {
  const { message } = await request.json();
  try {
    const twilioMessage = await client.messages.create({
      body: message,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:+918590611321`,
    });
    return NextResponse.json({ sid: twilioMessage.sid }, { status: 200 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending message' });
  }
}