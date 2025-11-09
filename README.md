# Codenest Collective Website

A modern, responsive website for Codenest Collective - a software development company that creates innovative solutions to transform businesses.

## About the Project

This is the official website for Codenest Collective, showcasing our services, projects, team, and expertise in custom software development. The website features:

- **Home**: Landing page with hero section and key features
- **About**: Information about our company and team
- **Services**: Overview of our software development services
- **Projects**: Portfolio of completed projects
- **Case Studies**: Detailed project case studies
- **Careers**: Job opportunities and application system
- **Contact**: Contact form integrated with EmailJS
- **Company**: Company information and values

## Technologies Used

This project is built with modern web technologies:

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **EmailJS** - Email integration for contact forms
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```sh
git clone https://github.com/meetbhatt/Codenest-Collective_Website.git
```

2. Navigate to the project directory:
```sh
cd Codenest-Collective_Website
```

3. Install dependencies:
```sh
npm install
```

### Running Locally

Start the development server:
```sh
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is in use).

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx  # Header navigation
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── CaseStudy.tsx
│   ├── Company.tsx
│   ├── Careers.tsx
│   └── Contact.tsx
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── App.tsx             # Main application component
```

## Features

- Fully responsive design
- Modern, clean UI with dark/light theme support
- Smooth animations and transitions
- Accessible components
- Type-safe codebase
- SEO-friendly routing
- Email integration for contact forms
- Job application system

## EmailJS Setup

The contact form uses EmailJS for sending emails. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your EmailJS credentials to the Contact component

Refer to `EMAILJS_SETUP_GUIDE.md` for detailed instructions.

## Deployment

Build the production version:
```sh
npm run build
```

The optimized files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary to Codenest Collective.
