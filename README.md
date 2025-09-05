# Triye - Revolutionary AI Security Solutions

A modern, interactive website built with React, Vite, and Tailwind CSS showcasing AI-powered security technology.

## Features

- **Interactive Animations**: Particle background system, mouse follower effects, smooth scroll animations
- **Modern Design**: Gradient backgrounds, glassmorphism effects, 3D transforms
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Vite build system, React hooks, efficient animations
- **Accessibility**: Reduced motion support, semantic HTML, keyboard navigation

## Tech Stack

- **Frontend**: React 18, Vite 4
- **Styling**: Tailwind CSS 3, Custom CSS animations
- **Icons**: Lucide React
- **Development**: ESLint, PostCSS, Autoprefixer

## Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd triye-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
triye-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── TriyeWebsite.jsx    # Main component
│   ├── App.jsx                 # App wrapper
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Key Components

### TriyeWebsite.jsx
Main component containing all sections:
- Header with navigation
- Hero section with particle background
- Vision section with interactive demo
- Technology concepts grid
- Development roadmap
- Future products showcase
- Mission statement
- Contact information
- Footer

### Interactive Features
- **Particle Background**: Canvas-based animated particle system
- **Mouse Follower**: Custom cursor that follows mouse movement
- **Scroll Animations**: Elements animate into view during scroll
- **Hover Effects**: Cards scale, rotate, and transform on hover
- **3D Elements**: Floating geometric shapes with physics

## Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
extend: {
  colors: {
    // Add your custom colors here
  }
}
```

### Animations
Add custom animations in `tailwind.config.js` under `extend.animation` and `extend.keyframes`.

### Content
Update text content, images, and icons directly in `TriyeWebsite.jsx`.

## Performance Notes

- Animations use CSS transforms for hardware acceleration
- Canvas animations are optimized with requestAnimationFrame
- Event listeners are properly cleaned up to prevent memory leaks
- Responsive images and optimized asset loading

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software owned by Triye.

## Support

For questions or issues, contact:
- Business: partnerships@triye.com
- Technical: tech@triye.com