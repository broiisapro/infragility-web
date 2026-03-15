# Infragility Labs Web Interface

Premium AI-powered SEO & GEO optimization platform with agent interface, project dashboard, and optimization request forms.

## Features

- **CEO Agent Chat Interface**: Real-time interaction with the Infragility Labs CEO agent
- **Project Status Dashboard**: Track SEO/GEO optimization projects in real-time
- **Optimization Request Form**: Submit new projects with configurable requirements
- **Performance Analytics**: Monitor SEO scores, GEO coverage, and keyword rankings
- **Agent Team Status**: View specialist agent availability and performance
- **Dark/Light Mode**: Full theme support with automatic system detection

## Tech Stack

- **Next.js 14** – React framework with App Router
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first styling
- **Radix UI** – Accessible component primitives
- **Lucide React** – Icon library
- **next-themes** – Theme management
- **Vercel** – Deployment platform

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm start
```

## Deployment

The application is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Configure environment variables (if needed)
3. Deploy automatically on push

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx           # Root layout with metadata
  page.tsx             # Home/dashboard page
  globals.css          # Global styles
components/
  dashboard/           # Dashboard components
  layout/             # Layout components (Header, Footer)
  providers/          # Context providers (Theme)
  ui/                 # Reusable UI components
lib/
  utils.ts            # Utility functions
public/               # Static assets
```

## Agent Integration

The interface simulates interaction with the Infragility Labs agent system. In a production environment, this would connect to:

- OpenClaw agent runtime via WebSocket/API
- Real-time project status updates
- Live chat with specialist agents

## License

Proprietary – © Infragility Labs