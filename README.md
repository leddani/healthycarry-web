# HealthyCarry Web Platform

A modern healthcare platform built with Next.js, focusing on providing accessible medical information and resources.

## Live Demo
[https://healthycarry-web.vercel.app](https://healthycarry-web.vercel.app)

## Features
- Modern UI with smooth animations
- Responsive design
- Error handling and loading states
- SEO optimized
- TypeScript support

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure
```
healthycarry-web/
├── src/
│   ├── app/
│   │   ├── page.tsx      # Main page
│   │   ├── layout.tsx    # Root layout
│   │   ├── error.tsx     # Error handling
│   │   ├── loading.tsx   # Loading state
│   │   ├── not-found.tsx # 404 page
│   │   └── globals.css   # Global styles
│   └── components/
│       └── magicui/
│           └── blur-fade.tsx  # Animation component
├── public/
│   └── healthycarry-logo.svg  # Site logo
├── vercel.json    # Vercel configuration
├── next.config.mjs # Next.js configuration
└── package.json   # Dependencies
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/leddani/healthycarry-web.git
```

2. Install dependencies:
```bash
cd healthycarry-web
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Deployment
The project is configured for easy deployment on Vercel. Any push to the main branch will trigger an automatic deployment.

## Error Handling
The application includes comprehensive error handling:
- Custom 404 page for not found routes
- Error boundary for runtime errors
- Loading states for better UX