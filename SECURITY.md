# Security Policy

## Security Overview

The **Mani Joshi Alokam Portfolio** application is built with security-first design patterns, specifically prioritizing developer PII (Personally Identifiable Information) protection, spam bot mitigation, and defensive API validation.

---

## Implemented Security Measures

### 1. PII & Email Scraping Prevention
- **Zero Client-Side Exposure**: The developer's direct contact email address is completely excluded from client-side markup, HTML DOM attributes, and client JavaScript bundles.
- **Server-Side Proxying**: Form submissions are handled via an isolated Next.js Server Route Handler (`/api/contact`). The server handles forwarding to delivery gateways without exposing credentials or target mailboxes to the browser network inspector.

### 2. Anti-Spam & Bot Protection (Honeypot Architecture)
- A hidden honeypot input (`_hp`) is embedded into the contact form with `display: none` and `aria-hidden="true"`.
- Automated spam crawlers and bot scripts that populate all available form fields are silently trapped: the API responds with a simulated success response (`200 OK`) while safely dropping the payload without execution or notification.

### 3. Server-Side Input Sanitization & Bounds Checking
- **Name**: String length constrained to 100 characters; whitespace trimmed.
- **Email**: Strict regular expression validation (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) and 150-character cap.
- **Message**: Length bounded between 5 and 5,000 characters to prevent buffer overflow attacks and empty spam pings.
- **Generic Error Disclosure**: User-facing error messages provide friendly guidance without leaking underlying infrastructure, server stack traces, or environment configurations.

---

## Reporting a Vulnerability

If you discover any security vulnerabilities or privacy concerns, please report them responsibly:

1. **Submission**: Submit an inquiry via the portfolio's contact form with the subject prefix `[SECURITY REPORT]`.
2. **Details**: Include a concise description of the issue, affected endpoint or component, and steps to reproduce.
3. **Response Time**: Legitimate security reports will be reviewed and addressed promptly.

Thank you for helping keep open-source software and developer tools safe!
