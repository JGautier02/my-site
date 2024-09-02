import { json } from '@sveltejs/kit';

import nodemailer from 'nodemailer';

import { SECRET_EMAIL_ADDRESS, SECRET_EMAIL_HOST, SECRET_EMAIL_PASSWORD } from "$env/static/private";

export const POST = async ({ request }) => {
    const { name, email, subject, body } = await request.json();

    if (!name || !email || !subject || !body) {
        return json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: SECRET_EMAIL_HOST,
        port: SECRET_EMAIL_HOST,
        secure: false,
        auth: {
            user: SECRET_EMAIL_ADDRESS,
            pass: SECRET_EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: SECRET_EMAIL_ADDRESS,
        to: SECRET_EMAIL_ADDRESS,
        subject: "Contact email",
        html: `
            <h1>${subject}</h1>
            <h2>${name} / ${email}</h2>
            <p>${body}</p>
        `
    }

    try {
        await transporter.sendMail(mailOptions);
        return json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return json({ error: 'Error sending email' }, { status: 500 });
    }
}