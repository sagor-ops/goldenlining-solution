# Goldenlining Solution — Setup Guide

## Prerequisites

Install Node.js (v18 or later):
https://nodejs.org/en/download

## Quick Start

```bash
# 1. Navigate to project directory
cd goldenlining-solution

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Copy .env.local.example to .env.local and fill in your Gmail credentials

# 4. Start development server
npm run dev
```

Open http://localhost:3000

## Email Setup (Contact Form)

To enable email notifications when someone submits the form:

1. Go to your Google Account → Security → App passwords
2. Create an App Password for "Mail"
3. Edit `.env.local`:
   ```
   SMTP_USER=sobur112@gmail.com
   SMTP_PASS=your-16-char-app-password
   ```

Form submissions are also saved locally to `data/submissions.json`
even without email configured.

## Production Build

```bash
npm run build
npm start
```

## Hostinger Deployment

1. Build the project: `npm run build`
2. Upload the entire project folder (excluding `node_modules`)
3. Run `npm install --production` on the server
4. Start with `npm start` or configure PM2

## Project Structure

```
goldenlining-solution/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, fonts
│   ├── page.tsx            # Main page assembling all sections
│   ├── globals.css         # Global styles, custom classes
│   └── api/contact/        # Contact form API endpoint
├── components/
│   ├── Navigation.tsx      # Sticky glassmorphism navbar
│   ├── Hero.tsx            # Cinematic hero with particles
│   ├── TrustBar.tsx        # Animated services marquee
│   ├── Services.tsx        # Tabbed services showcase
│   ├── WhyChooseUs.tsx     # Value proposition section
│   ├── Portfolio.tsx       # Filterable project grid
│   ├── About.tsx           # Company story + timeline
│   ├── Team.tsx            # Team member cards
│   ├── Blog.tsx            # Editorial blog layout
│   ├── ConsultationCTA.tsx # Full-width CTA section
│   ├── Contact.tsx         # Contact form + info
│   ├── Footer.tsx          # Premium footer
│   ├── ConsultationModal.tsx # Popup form modal
│   ├── LoadingScreen.tsx   # Premium intro animation
│   ├── CustomCursor.tsx    # Magnetic gold cursor
│   ├── ParticleBackground.tsx # Canvas particle system
│   └── SmoothScrollProvider.tsx # Lenis smooth scroll
└── lib/utils.ts            # Tailwind class utilities
```
