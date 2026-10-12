# 💼 Mani Joshi Alokam — Software Engineering Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3.2-black.svg?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Security](https://img.shields.io/badge/Privacy-Zero--Leakage_Contact-brightgreen.svg)](./SECURITY.md)

A modern, high-performance, responsive engineering portfolio designed and built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS**. Showcases production-ready software systems, interactive technical modals, real-time dark/light theming, bot-protected contact routing, and direct resume delivery.

---

## 📋 Table of Contents

- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Key Features](#-key-features)
- [Codebase Architecture](#-codebase-architecture)
- [Featured Engineering Projects](#-featured-engineering-projects)
- [Technology Stack & Rationale](#-technology-stack--rationale)
- [Security & Privacy](#-security--privacy)
- [Setup & Installation Guide](#-setup--installation-guide)
- [License](#-license)

---

## 🎯 Problem Statement

Traditional developer portfolios frequently suffer from several critical shortcomings:

1. **Generic Templates & Cookie-Cutter Aesthetics**: Drag-and-drop website builders or basic static portfolios often generate bloated HTML, lack interactive engineering depth, and fail to demonstrate genuine full-stack architecture.
2. **PII Exposure & Spam Vulnerability**: Directly placing a personal email address on public websites subjects developers to relentless automated web scraping, credential harvesting, and spam bots.
3. **Superficial Project Presentation**: Most portfolios present superficial card links without explaining architectural trade-offs, problem statements, implementation choices, and measurable impact.
4. **Poor Mobile Responsiveness & Theme Friction**: Inconsistent dark mode persistence and unresponsive multi-column layouts create high bounce rates across mobile and tablet viewports.

---

## 💡 Solution

This portfolio delivers a **production-grade engineering showcase**:

- **Server-Side Contact Isolation**: Replaces vulnerable mailto links with an isolated Next.js Server Route Handler (`/api/contact`) that protects developer contact details while silently trapping bots using hidden honeypot fields.
- **Architectural Project Modals**: Each engineering project includes a structured breakdown covering the problem statement, architectural solution, technical implementation, stack, and conclusion, alongside direct GitHub and live demo action links.
- **State-of-the-Art Aesthetic & Performance**: Powered by Turbopack and React 19, delivering sub-second hot reload, smooth glassmorphism accents, seamless dark/light theme switching with `localStorage` persistence, and instant resume downloads.

---

## ✨ Key Features

- **🌓 Dynamic Dark / Light Mode**: Instant theme switching with system detection and persistence via `localStorage`.
- **🛡️ Secure Server-Side Contact Gateway**: Zero email address exposure in DOM or client bundles; honeypot bot trap with robust server-side validation.
- **📂 Interactive Project Deep Dives**: Accessible modal overlays presenting comprehensive technical blueprints and direct source repositories.
- **⚡ Modern Responsive Layout**: Edge-to-edge layout optimization spanning mobile, tablet, and widescreen viewports.
- **📄 Instant Resume Delivery**: Direct download trigger serving `Mani_Joshi_Alokam_Resume.pdf` with verified single-click delivery.

---

## 🏗️ Codebase Architecture

```
Portfolio/
├── portfolio-app/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # Server-side contact gateway & honeypot engine
│   │   ├── globals.css               # Design system tokens, utilities & themes
│   │   ├── layout.tsx                # App root layout with font optimization
│   │   └── page.tsx                  # Landing view orchestrating layout sections
│   ├── components/
│   │   ├── About.tsx                 # Background, education highlights & journey
│   │   ├── ContactForm.tsx           # Secure contact form with live feedback
│   │   ├── Footer.tsx                # Social navigation and copyright
│   │   ├── Hero.tsx                  # Introduction, action CTAs & resume download
│   │   ├── Navbar.tsx                # Sticky blur navigation & theme controller
│   │   ├── Projects.tsx              # 3-column project grid & technical modal
│   │   └── Skills.tsx                # Core software engineering capabilities
│   ├── data/
│   │   └── portfolioData.ts          # Central typed schema for projects and bio
│   ├── public/
│   │   ├── assets/                   # Vector icons, tech logos & illustrations
│   │   └── resume-Mani.pdf           # Up-to-date verified resume document
│   ├── next.config.ts                # Next.js configuration (Turbopack)
│   ├── package.json                  # Dependencies & script runner definitions
│   └── tsconfig.json                 # TypeScript compiler configuration
├── .gitignore                        # Global repository exclusion rules
├── LICENSE                           # MIT License
├── README.md                         # Project documentation
└── SECURITY.md                       # Security policy & vulnerability disclosures
```

---

## 🚀 Featured Engineering Projects

| Project | Domain | Key Technologies | Highlights |
| :--- | :--- | :--- | :--- |
| **[Summariz](https://github.com/Manijoshi-567/Summariz)** | AI Document Assistant | React 18, Vite, Gemini API, Tesseract.js, Mammoth.js, SheetJS | 100% client-side document parser & OCR with zero server-side data leakage |
| **[AI Studio](https://github.com/Manijoshi-567/Manijoshi-s-Ai-Studio-)** | Autonomous Multi-Agent AI | Python 3.10+, Flask, OpenAI GPT-4o, Gemini API, BeautifulSoup4 | 4-agent collaborative pipeline generating production landing pages in <90s |
| **[Vathavaran](https://github.com/Manijoshi-567/Vathavaran)** | Meteorological Platform | React 19, TypeScript, Vite 7, Leaflet Maps, Open-Meteo API | Real-time weather observatory with AI rain prediction and interactive radar map |

---

## ⚙️ Technology Stack & Rationale

- **Next.js 16 (App Router)**: Fast Server-Side Rendering (SSR), efficient route handling, and zero client bundle overhead for server endpoints.
- **React 19**: Modern concurrent features and lightweight state management.
- **TypeScript 5**: Complete end-to-end type safety for project models and data contracts.
- **Tailwind CSS 4**: Utility-first styling with responsive breakpoint grids and dark mode color tailoring.
- **Lucide Icons**: Crisp, scalable vector icons.

---

## 🔒 Security & Privacy

This application enforces defensive web security standards:
- **No PII Leaks**: The target developer email is omitted from the client bundle and only accessed within server execution (`app/api/contact/route.ts`).
- **Honeypot Protection**: Protects against spam engines via hidden `_hp` field traps.
- **Input Sanitization**: Client inputs are validated against strict length boundaries and regex rules.
- See [SECURITY.md](./SECURITY.md) for full policy details.

---

## 🛠️ Setup & Installation Guide

### Prerequisites
- **Node.js**: v18.18.0 or higher
- **npm**: v9+ (or pnpm / yarn)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Manijoshi-567/Portfolio.git
   cd Portfolio/portfolio-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **(Optional) Configure Environment Variables:**
   Create a `.env.local` file inside `portfolio-app/` if you want to override the target contact email:
   ```env
   CONTACT_EMAIL=your_email@example.com
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```

5. **Open local preview:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 License

This project is licensed under the terms of the [MIT License](./LICENSE).

Copyright © 2026 **ALOKAM MANI JOSHI**. All rights reserved.
