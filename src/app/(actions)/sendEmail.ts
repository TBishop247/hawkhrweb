'use server'; // Ensures this function runs strictly on the server

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); //

export async function sendEmail(formData: FormData) {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'webserver@hawk-hr.dev', // Replace with your verified domain in production
      to: [email],
      subject: 'Demonstration Request',
      html: `<p>${message}</p>`, //
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
