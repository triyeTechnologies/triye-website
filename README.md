# Triye — AI Security Solutions

Company website for **Triye Technologies** — showcasing **Traced**, our AI-powered real-time crime detection and camera-network intelligence platform.

Built with React 18, Vite 6, and Tailwind CSS 3.

## Tech Stack

- **Frontend**: React 18, Vite 6, React Router 7
- **Styling**: Tailwind CSS 3, Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (contact messages + admin auth)
- **Hosting**: Vercel (SPA rewrite configured in `vercel.json`)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables — copy `.env.example` to `.env.local` and fill in your Supabase project values:

```bash
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

3. Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

### Scripts

| Command           | Purpose                          |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start dev server (port 3000)     |
| `npm run build`   | Production build to `dist/`      |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint over `src/`           |

## Project Structure

```
triye-website/
├── public/                  # Static assets (images, videos, logo)
├── src/
│   ├── components/
│   │   ├── sections/        # Landing page sections (Hero, Vision, Features, ...)
│   │   ├── AdminPage.jsx    # /admin — message dashboard (Supabase auth)
│   │   ├── EmailForm.jsx    # Contact form modal
│   │   └── TriyeWebsite.jsx # Landing page composition
│   ├── lib/supabase.js      # Supabase client + database/auth helpers
│   ├── App.jsx
│   ├── main.jsx             # Entry + routes (/ and /admin)
│   └── index.css            # Tailwind + global styles
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## Routes

- `/` — Marketing landing page
- `/admin` — Message dashboard (requires Supabase authenticated user)

## Supabase Notes

The contact form inserts rows into a `messages` table using the public anon key.
**Row Level Security must be enabled** on that table with policies that:

- allow `INSERT` for the `anon` role
- restrict `SELECT` and `DELETE` to authenticated users only

## License

Proprietary software owned by Triye Technologies Pvt. Ltd.

## Contact

- Email: triye3@gmail.com
- Instagram: [@triye_technologies](https://www.instagram.com/triye_technologies/)
- LinkedIn: [Triye Technologies](https://www.linkedin.com/company/triye-technologies/)
