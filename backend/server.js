const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-mail", async (req, res) => {
    try {
        const { name, email, subject, description } = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.COMPANY_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `New Inquiry: ${subject}`,
            // Replace your `html` property in mailOptions with this:

            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Inquiry - Mangalam</title>
                </head>
                <body style="margin:0;padding:0;font-family:'Segoe UI',system-ui,-apple-system,sans-serif;background:#0f172a;">
                
                <!-- Outer Container -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0f172a;padding:24px 20px;">
                    <tr>
                    <td align="center">
                        
                        <!-- Email Card -->
                        <table width="100%" max-width="600px" cellpadding="0" cellspacing="0" border="0" 
                            style="background:#1e293b;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.3);border:1px solid #334155;">
                        
                        <!-- Header Brand Bar -->
                        <tr>
                            <td style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%);padding:24px 28px;text-align:center;border-bottom:1px solid #334155;">
                            <h1 style="margin:0;color:#22d3ee;font-size:24px;font-weight:700;letter-spacing:1px;">
                                ✨ Mangalam
                            </h1>
                            <p style="margin:8px 0 0;color:#94a3b8;font-size:13px;font-weight:500;letter-spacing:0.5px;text-transform:uppercase;">
                                New Contact Inquiry
                            </p>
                            </td>
                        </tr>
                        
                        <!-- Content Body -->
                        <tr>
                            <td style="padding:28px;">
                            
                            <!-- Greeting -->
                            <p style="margin:0 0 20px;color:#f8fafc;font-size:16px;font-weight:500;">
                                Hello Team,
                            </p>
                            <p style="margin:0 0 24px;color:#cbd5e1;font-size:15px;line-height:1.6;">
                                You've received a new message from your website contact form:
                            </p>
                            
                            <!-- Details Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" 
                                    style="background:#0f172a;border:1px solid #334155;border-radius:10px;margin-bottom:24px;">
                                <tr>
                                <td style="padding:16px 20px 12px;color:#94a3b8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">
                                    Contact Details
                                </td>
                                </tr>
                                <tr>
                                <td style="padding:0 20px 12px;">
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                        <td width="80px" style="padding:8px 0;color:#94a3b8;font-size:14px;">Name:</td>
                                        <td style="padding:8px 0;color:#f8fafc;font-size:15px;font-weight:500;">${name}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:8px 0;color:#94a3b8;font-size:14px;">Email:</td>
                                        <td style="padding:8px 0;">
                                        <a href="mailto:${email}" style="color:#22d3ee;text-decoration:none;font-size:15px;font-weight:500;">${email}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:8px 0;color:#94a3b8;font-size:14px;">Subject:</td>
                                        <td style="padding:8px 0;color:#f8fafc;font-size:15px;font-weight:500;">${subject}</td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                            </table>
                            
                            <!-- Message Box -->
                            <div style="background:rgba(6,182,212,0.08);border:1px solid rgba(6,182,212,0.2);border-left:3px solid #06b6d4;padding:18px 20px;border-radius:0 10px 10px 0;margin:24px 0;">
                                <p style="margin:0 0 10px;color:#22d3ee;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">
                                Message
                                </p>
                                <p style="margin:0;color:#cbd5e1;font-size:15px;line-height:1.7;white-space:pre-wrap;">
                                ${description}
                                </p>
                            </div>
                            
                            <!-- CTA Button -->
                            <table cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
                                <tr>
                                <td style="border-radius:10px;background:linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%);">
                                    <a href="mailto:${email}" 
                                    style="display:inline-block;padding:12px 28px;color:#0f172a;font-size:14px;font-weight:700;text-decoration:none;border-radius:10px;letter-spacing:0.3px;">
                                    → Reply to ${name}
                                    </a>
                                </td>
                                </tr>
                            </table>
                            
                            </td>
                        </tr>
                        
                        <!-- Footer -->
                        <tr>
                            <td style="background:#0f172a;padding:20px 28px;text-align:center;border-top:1px solid #334155;">
                            <p style="margin:0;color:#64748b;font-size:12px;line-height:1.6;">
                                This inquiry was sent via 
                                <strong style="color:#94a3b8;">Mangalam Website</strong>
                                <br>
                                <span style="color:#475569;">
                                ${new Date().toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
                                </span>
                            </p>
                            <p style="margin:12px 0 0;color:#334155;font-size:11px;">
                                Ahmedabad, Gujarat • Engineering Excellence
                            </p>
                            </td>
                        </tr>
                        
                        </table>
                        
                        <!-- Spacer -->
                        <div style="height:40px;"></div>
                        
                    </td>
                    </tr>
                </table>
                
                </body>
                </html>
                `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to send email",
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
});