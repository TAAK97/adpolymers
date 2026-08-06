import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Defer static generation during build time
export const dynamic = 'force-dynamic';

/**
 * 1. PUT Handler: Authorizes direct client-side uploads to Vercel Blob.
 * Bypasses Vercel's 4.5 MB Serverless Payload Limit.
 */
export async function PUT(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        return {
          allowedContentTypes: [
            'application/pdf',
            'application/zip',
            'application/x-zip-compressed',
            'application/octet-stream', // Handles CAD files (.step, .stp, .stl, .dwg, etc.)
            'image/jpeg',
            'image/png',
          ],
          tokenPayload: JSON.stringify({}),
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log('Vercel Blob upload completed successfully:', blob.url);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error('Blob upload auth error:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}

/**
 * 2. POST Handler: Processes the RFQ submission & sends email via Resend.
 */
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

    const resend = new Resend(apiKey);
    const body = await request.json();

    const {
      fullName,
      email,
      company,
      phone,
      materialRequirements,
      estimatedVolume,
      additionalNotes,
      cadFileUrl,
      cadFileName,
    } = body;

    await resend.emails.send({
      from: 'AD RFQ Form <info@adpolymers.in>', // Use verified domain once ready, or 'onboarding@resend.dev'
      to: ['taakdhairya@gmail.com'],
      replyTo: email,
      subject: `📥 New RFQ Submission: ${company || fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
            New Request For Quote Received
          </h2>
          
          <h3>01. Contact Information</h3>
          <ul style="list-style: none; padding-left: 0;">
            <li><strong>Full Name:</strong> ${fullName || 'Not provided'}</li>
            <li><strong>Work Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Company:</strong> ${company || 'Not provided'}</li>
            <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          </ul>

          <h3 style="margin-top: 24px;">02. Project & Material Specifications</h3>
          <ul style="list-style: none; padding-left: 0;">
            <li><strong>Polymer / Grade:</strong> ${materialRequirements || 'Not specified'}</li>
            <li><strong>Estimated Volume:</strong> ${estimatedVolume || 'Not specified'}</li>
            <li><strong>CAD Attachment:</strong> ${
              cadFileUrl
                ? `<a href="${cadFileUrl}" target="_blank" style="color: #2563eb; font-weight: bold;">Download ${cadFileName || 'CAD File'}</a>`
                : 'No CAD file attached'
            }</li>
          </ul>

          <h4>Engineering Notes:</h4>
          <p style="background-color: #f8fafc; padding: 12px; border-radius: 6px; border-left: 4px solid #2563eb;">
            ${additionalNotes ? additionalNotes.replace(/\n/g, '<br>') : 'None provided'}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Failed to send RFQ email:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send email notification' },
      { status: 500 }
    );
  }
}