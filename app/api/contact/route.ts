import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, email, telephone, entreprise, sujet, message, budget } = body

    // Validation des champs requis
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email, sujet et message sont requis' },
        { status: 400 }
      )
    }

    // Configuration du transporteur Nodemailer avec Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // 3r.elkhaddar@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD, // Mot de passe d'application Gmail
      },
    })

    // Préparation du contenu de l'email
    const mailOptions = {
      from: `"Vorion Studio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Envoi à 3r.elkhaddar@gmail.com
      replyTo: email, // Permet de répondre directement au client
      subject: `[Vorion Studio] ${sujet} - ${nom}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
                line-height: 1.6; 
                color: #1f2937; 
                background-color: #f3f4f6;
                padding: 20px;
              }
              .email-wrapper {
                max-width: 900px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #6B46C1 0%, #4C51BF 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              .header h1 {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 8px;
              }
              .header p {
                font-size: 16px;
                opacity: 0.95;
              }
              .content {
                padding: 40px 30px;
                background: #ffffff;
              }
              .info-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-bottom: 30px;
              }
              .info-card {
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                padding: 20px;
                border-left: 4px solid #6B46C1;
                transition: all 0.3s ease;
              }
              .info-card:hover {
                background: #f3f4f6;
                box-shadow: 0 2px 8px rgba(107, 70, 193, 0.1);
              }
              .info-label {
                font-size: 12px;
                font-weight: 600;
                color: #6B46C1;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
              }
              .info-value {
                font-size: 16px;
                color: #1f2937;
                font-weight: 500;
                word-break: break-word;
              }
              .info-value a {
                color: #6B46C1;
                text-decoration: none;
              }
              .info-value a:hover {
                text-decoration: underline;
              }
              .full-width {
                grid-column: 1 / -1;
              }
              .message-section {
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                padding: 25px;
                margin-top: 20px;
                border-left: 4px solid #6B46C1;
              }
              .message-label {
                font-size: 12px;
                font-weight: 600;
                color: #6B46C1;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 12px;
              }
              .message-content {
                font-size: 15px;
                color: #374151;
                line-height: 1.8;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                background: #f9fafb;
                padding: 25px 30px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
                font-size: 13px;
                color: #6b7280;
              }
              .footer p {
                margin-bottom: 5px;
              }
              .badge {
                display: inline-block;
                background: #6B46C1;
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-top: 8px;
              }
              @media only screen and (max-width: 600px) {
                .info-grid {
                  grid-template-columns: 1fr;
                }
                .content {
                  padding: 25px 20px;
                }
                .header {
                  padding: 30px 20px;
                }
              }
            </style>
          </head>
          <body>
            <div class="email-wrapper">
              <div class="header">
                <h1>📧 Nouveau message de contact</h1>
                <p>Vorion Studio</p>
              </div>
              
              <div class="content">
                <div class="info-grid">
                  <div class="info-card">
                    <div class="info-label">👤 Nom complet</div>
                    <div class="info-value">${nom}</div>
                  </div>
                  
                  <div class="info-card">
                    <div class="info-label">✉️ Email</div>
                    <div class="info-value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  
                  ${telephone ? `
                  <div class="info-card">
                    <div class="info-label">📱 Téléphone</div>
                    <div class="info-value"><a href="tel:${telephone}">${telephone}</a></div>
                  </div>
                  ` : ''}
                  
                  ${entreprise ? `
                  <div class="info-card">
                    <div class="info-label">🏢 Entreprise</div>
                    <div class="info-value">${entreprise}</div>
                  </div>
                  ` : ''}
                  
                  <div class="info-card full-width">
                    <div class="info-label">📋 Sujet</div>
                    <div class="info-value">${sujet}</div>
                  </div>
                  
                  ${budget ? `
                  <div class="info-card full-width">
                    <div class="info-label">💰 Budget estimé</div>
                    <div class="info-value">${budget}</div>
                  </div>
                  ` : ''}
                </div>
                
                <div class="message-section">
                  <div class="message-label">💬 Message</div>
                  <div class="message-content">${message}</div>
                </div>
              </div>
              
              <div class="footer">
                <p><strong>Ce message a été envoyé depuis le formulaire de contact du site Vorion Studio.</strong></p>
                <p>Vous pouvez répondre directement à cet email pour contacter <strong>${nom}</strong>.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nouveau message de contact - Vorion Studio

Nom complet : ${nom}
Email : ${email}
${telephone ? `Téléphone : ${telephone}` : ''}
${entreprise ? `Entreprise : ${entreprise}` : ''}
Sujet : ${sujet}
${budget ? `Budget estimé : ${budget}` : ''}

Message :
${message}

---
Ce message a été envoyé depuis le formulaire de contact du site Vorion Studio.
      `,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' },
      { status: 500 }
    )
  }
}

