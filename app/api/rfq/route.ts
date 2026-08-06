import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Defer static generation during build time
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing from environment variables.');
      return NextResponse.json(
        { error: 'Server misconfiguration: missing API key' },
        { status: 500 }
      );
    }

    // Initialize Resend dynamically inside request execution
    const resend = new Resend(apiKey);

    const formData = await request.formData();

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const materialRequirements = formData.get('materialRequirements') as string;
    const estimatedVolume = formData.get('estimatedVolume') as string;
    const additionalNotes = formData.get('additionalNotes') as string;
    const cadFile = formData.get('cadFile') as File | null;

    // Prepare attachments array for Resend
    const attachments = [];
    if (cadFile && cadFile.size > 0) {
      const bytes = await cadFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: cadFile.name,
        content: buffer,
      });
    }

    await resend.emails.send({
      from: 'AD RFQ Form <onboarding@resend.dev>',
      to: ['taakdhairya@gmail.com'],
      replyTo: email,
      subject: `📥 New RFQ Submission: ${company || fullName}`,
      attachments: attachments.length > 0 ? attachments : undefined,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
            New Request For Quote Received
          </h2>
          
          <h3>01. Contact Information</h3>
          <ul style="list-style: none; padding-left: 0;">
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Work Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Company:</strong> ${company}</li>
            <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          </ul>

          <h3 style="margin-top: 24px;">02. Project & Material Specifications</h3>
          <ul style="list-style: none; padding-left: 0;">
            <li><strong>Polymer / Grade:</strong> ${materialRequirements || 'Not specified'}</li>
            <li><strong>Estimated Volume:</strong> ${estimatedVolume || 'Not specified'}</li>
            <li><strong>CAD Attachment:</strong> ${cadFile && cadFile.size > 0 ? cadFile.name : 'No CAD file attached'}</li>
          </ul>

          <h4>Engineering Notes:</h4>
          <p style="background-color: #f8fafc; padding: 12px; border-radius: 6px; border-left: 4px solid #2563eb;">
            ${additionalNotes ? additionalNotes.replace(/\n/g, '<br>') : 'None provided'}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send RFQ email:', error);
    return NextResponse.json(
      { error: 'Failed to send email notification' },
      { status: 500 }
    );
  }
}