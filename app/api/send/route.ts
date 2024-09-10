import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

// POST method for sending emails
export async function POST(req: NextRequest) {
  const response = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'safeShare@resend.dev',
      to: ['19krishprasad06@gmail.com'],  // Hardcoded email recipient
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),  // Hardcoded first name
    });

    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
