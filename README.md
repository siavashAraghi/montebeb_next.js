# Montebeb CMS

A modern, full-stack CMS built with **Next.js 16**, **TypeScript**, and **TailwindCSS**. This is a next-generation rebuild of the montebeb.com website, featuring a powerful product management system, content delivery, and an AI-powered backend.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![Prisma](https://img.shields.io/badge/Prisma-7.8-2d3748?style=flat-square&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-336791?style=flat-square&logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38b2ac?style=flat-square&logo=tailwindcss)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Development](#development)
- [Testing](#testing)
- [Build & Deployment](#build--deployment)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 🛍️ **Product Management System** - Create, edit, and manage products with categories, colors, and images
- 📝 **Content Management** - Blog posts and page management
- 👤 **User Management** - User authentication and profile management
- 📊 **Admin Dashboard** - Manage products, posts, categories, and settings
- 🎨 **Dynamic Theming** - Multiple template support with customizable design
- 🤖 **AI Integration** - OpenAI integration for enhanced features
- 💬 **Contact Management** - Message and contact form handling
- 📱 **Responsive Design** - Mobile-first approach with TailwindCSS
- 🔐 **Type-Safe** - Full TypeScript support for better developer experience
- 📦 **State Management** - Redux Toolkit for predictable state management
- 🔄 **Data Fetching** - React Query for powerful asynchronous data management
- ✅ **Testing** - Jest and React Testing Library setup
- 📋 **Code Quality** - ESLint configured with strict rules

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 16.1
- **UI Library**: React 19.2
- **Styling**: TailwindCSS 4
- **Language**: TypeScript 5
- **State Management**: Redux Toolkit 2.11
- **Data Fetching**: React Query 5.90
- **Form Handling**: React Hook Form 7.76
- **Carousels**: Swiper 12.1
- **HTML Sanitization**: DOMPurify 3.4 & Isomorphic DOMPurify

### Backend & Database
- **ORM**: Prisma 7.8
- **Database**: PostgreSQL
- **Adapter**: @prisma/adapter-pg
- **Environment Variables**: dotenv 17.4

### AI & External APIs
- **OpenAI**: Integration for AI-powered features

### Development Tools
- **Linting**: ESLint 9 with Next.js config
- **Testing**: Jest 30.2 with jsdom environment
- **Test Utils**: React Testing Library 16.3
- **Package Manager**: npm (with lock file)

## 📁 Project Structure

```
montebeb_next.js/
├── app/                      # Next.js App Router directory
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   └── ...                  # Other routes
├── components/              # Reusable React components
├── ui/                      # UI components library
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and helpers
├── models/                  # Data models and types
├── types/                   # TypeScript type definitions
├── public/                  # Static assets
├── prisma/                  # Database schema and migrations
│   └── schema.prisma        # Prisma schema definition
├── generated/               # Auto-generated files (Prisma client, etc.)
├── Templates/               # Template files
├── .vscode/                 # VS Code settings
├── env.d.ts                 # Environment variable types
├── jest.config.js           # Jest testing configuration
├── jest.setup.js            # Jest setup file
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs        # PostCSS configuration
├── eslint.config.mjs        # ESLint configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher (or yarn/pnpm)
- **PostgreSQL**: 12+ (local or remote)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/siavashAraghi/montebeb_next.js.git
   cd montebeb_next.js
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   cp .env.example .env.local
   ```
   See [Environment Variables](#environment-variables) section for details.

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Run migrations
   npx prisma migrate dev --name init
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/montebeb

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# OpenAI Integration
OPENAI_API_KEY=sk-your-api-key-here

# MongoDB (Legacy - if still needed)
MONGODB_URI=mongodb://localhost:27017/montebeb
```

### Environment Variable Types

The project includes TypeScript type definitions for environment variables in `env.d.ts`:

```typescript
MONGODB_URI: string;
NEXT_PUBLIC_API_URL: string;
```

## 💾 Database Setup

### Prisma Commands

```bash
# Generate Prisma Client (required after schema changes)
npx prisma generate

# Create and run migrations
npx prisma migrate dev --name <migration_name>

# Push schema to database (for development)
npx prisma db push

# Pull existing database schema
npx prisma db pull

# View database in GUI
npx prisma studio

# Create migration from diff (for existing databases)
npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
npx prisma migrate resolve --applied 0_init
```

## 📊 Database Schema

The application uses PostgreSQL with Prisma ORM. Key entities include:

### Core Models

- **User** - User authentication and profiles
- **Post** - Blog posts and content
- **Product** - Product catalog with pricing and images
- **Category** - Hierarchical product categories
- **Product Colors** - Color variants for products
- **Product Images** - Product gallery and images
- **Pages** - CMS pages and routing
- **General** - Global site settings and metadata
- **Messages** - Contact form submissions
- **Settings** - Application configuration

See `prisma/schema.prisma` for the complete database schema.

## 🔧 Development

### Running the Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) with hot-reload enabled.

### Code Structure Best Practices

- Components in `/components` - Reusable UI components
- Pages in `/app` - Route handlers and page components
- Hooks in `/hooks` - Custom React hooks
- Utils in `/lib` - Shared utility functions
- Types in `/types` - Shared TypeScript types

### Hot Reload

Edit files like `app/page.tsx` and the page auto-updates as you save.

## ✅ Testing

### Running Tests

```bash
npm run test
```

### Test Configuration

- **Runner**: Jest 30.2
- **Environment**: jsdom (browser environment)
- **Testing Lib**: React Testing Library 16.3
- **User Event**: for simulating user interactions

### Writing Tests

Tests can be placed alongside your components or in a dedicated `__tests__` directory. The configuration is set up in `jest.config.js` and `jest.setup.js`.

## 🏗 Build & Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized production build.

### Starting Production Server

```bash
npm run start
```

Starts the application in production mode.

### Linting

```bash
npm run lint
```

Checks code quality with ESLint (strict Next.js configuration).

## 📚 API Documentation

The application uses Next.js App Router for API routes. API endpoints follow RESTful conventions and should be placed in the `app/api` directory.

### Example API Route Structure

```
app/
├── api/
│   ├── products/
│   │   ├── route.ts        # GET, POST /api/products
│   │   └── [id]/
│   │       └── route.ts    # GET, PUT, DELETE /api/products/[id]
│   ├── posts/
│   └── users/
```

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app:

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import the repository
4. Add environment variables in Vercel dashboard
5. Click Deploy

For detailed deployment instructions, see [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Alternative Deployment

- **Docker**: Create a Dockerfile for containerized deployment
- **Self-hosted**: Deploy on your own server with Node.js support
- **Netlify**: With serverless function support
- **AWS, Google Cloud, Azure**: Full cloud deployment support

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Query Documentation](https://tanstack.com/query/latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow ESLint rules configured in `eslint.config.mjs`
- Use TypeScript for type safety
- Write tests for new features
- Keep components focused and reusable

## 📝 License

This project is private. Please contact the repository owner for licensing information.

## 👤 Author

**Siavash Araghi**
- GitHub: [@siavashAraghi](https://github.com/siavashAraghi)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Database powered by [Prisma](https://www.prisma.io/) and [PostgreSQL](https://www.postgresql.org/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Data fetching with [React Query](https://tanstack.com/query/latest)

---

**Made with ❤️ by Siavash Araghi**
