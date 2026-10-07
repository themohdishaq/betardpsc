# Inquiry delivery

The home, contact, and consultation forms submit to `/api/inquiries`.
They do not require an email application. The route sends plain text to
`services@rdpsc.ca`, with the visitor's email as Reply-To.

Configure these server environment variables before enabling delivery:

```
RESEND_API_KEY=<your sending API key>
INQUIRY_FROM_EMAIL=RD Prestige Services Corp. <website@your-verified-domain>
```

Use a sender domain verified in your Resend account. Never expose these
variables with a `NEXT_PUBLIC_` prefix. Configure them in the deployment's
environment settings, or an ignored `.env.local` for local development.
Restart the server after changing them.

See https://resend.com/docs/api-reference/emails/send-email for provider setup.
Without configuration, the route returns 503 and the visitor receives a clear
not-sent message and phone/email alternatives. Success is shown only after
the provider accepts the message; inbox delivery is not guaranteed by that
acceptance. A Node.js deployment is required; static export cannot run the route.

Before release, submit an authorized test inquiry and verify receipt in the
company mailbox. No live test inquiry was sent during implementation.

The route validates field lengths and service names, rejects requests with a
foreign Origin, and limits attempts per email within each server process.
Use deployment-wide request limits when running multiple server instances.
