# ML Flashcards Study Application

## Overview

An interactive flashcard application designed for studying Machine Learning concepts. The application features a card-flipping interface with score tracking, progress monitoring, and a clean, distraction-free design. Built as a full-stack TypeScript application with React frontend and Express backend, currently using in-memory storage with database schema prepared for PostgreSQL migration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite for fast development and optimized production builds.

**Routing**: Wouter for lightweight client-side routing with a simple two-route structure (Home and NotFound).

**State Management**: 
- Local component state using React hooks (useState, useEffect)
- TanStack Query (React Query) for server state management and data fetching
- No global state management - application state is intentionally simple and component-scoped

**UI Component System**:
- shadcn/ui component library (New York style variant) providing 40+ pre-built, accessible components
- Radix UI primitives for low-level accessible components
- Tailwind CSS for styling with custom design tokens
- Class Variance Authority (CVA) for component variant management

**Design System**:
- Typography: Inter font family (400, 500, 600 weights) from Google Fonts
- Spacing: Tailwind spacing scale (2, 4, 8, 12, 16, 20 units)
- Colors: HSL-based color system with CSS custom properties for theming
- Components follow Material Design and modern productivity tool patterns (Notion, Linear)
- Focus on clarity, efficiency, and distraction-free learning

**Key Features**:
- 3D card flip animations using CSS transforms and preserve-3d
- Responsive layout (mobile-first with desktop optimizations)
- Score tracking and progress indicators
- Keyboard accessibility support

### Backend Architecture

**Runtime**: Node.js with TypeScript (ESNext modules)

**Framework**: Express.js for HTTP server and middleware

**Development vs Production**:
- Development: Vite dev server with HMR (Hot Module Replacement) middleware
- Production: Static file serving from compiled build directory
- Separate entry points (index-dev.ts and index-prod.ts) for environment-specific configuration

**API Structure**:
- RESTful API design with `/api` prefix for all endpoints
- Routes registered through centralized route handler (server/routes.ts)
- Request/response logging with performance timing
- JSON body parsing with raw body preservation for webhook support

**Storage Layer**:
- Abstract storage interface (IStorage) for data operations
- In-memory storage implementation (MemStorage) for development
- CRUD methods for user management (getUser, getUserByUsername, createUser)
- Schema defined using Drizzle ORM with PostgreSQL dialect prepared for future migration

### External Dependencies

**Database (Prepared)**:
- Drizzle ORM v0.39.1 for type-safe database queries and schema management
- Neon Serverless (@neondatabase/serverless v0.10.4) for PostgreSQL connection
- Schema location: shared/schema.ts with users table defined
- Migration configuration ready (drizzle.config.ts) but database not yet provisioned
- Connection expects DATABASE_URL environment variable

**UI Component Libraries**:
- Radix UI component primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, etc.)
- 25+ Radix UI packages for accessible, unstyled components
- shadcn/ui configuration for styled component variants

**Styling**:
- Tailwind CSS v3 with PostCSS
- tailwind-merge and clsx for conditional class composition
- CSS custom properties for theming

**Form Management**:
- React Hook Form with @hookform/resolvers for validation
- Zod for schema validation (via drizzle-zod)

**Development Tools**:
- Vite plugins: @replit/vite-plugin-runtime-error-modal, cartographer, dev-banner
- TypeScript with strict mode enabled
- Path aliases configured (@/, @shared/, @assets/)

**Session Management (Prepared)**:
- connect-pg-simple v10.0.0 for PostgreSQL session storage (not yet active)

**Utilities**:
- date-fns v3.6.0 for date manipulation
- nanoid for unique ID generation
- embla-carousel-react for carousel components (UI library feature)

### Data Models

**User Schema** (shared/schema.ts):
- `id`: UUID primary key (auto-generated)
- `username`: unique text field
- `password`: text field
- Validation schemas created using drizzle-zod

**Application Data**:
- Flashcard deck stored as client-side array (8 ML concept cards)
- Card structure: question (q) and answer (a) strings
- Score and progress tracked in component state

### Build and Deployment

**Build Process**:
- Frontend: Vite builds React app to dist/public
- Backend: esbuild bundles server code to dist/index.js with ESM format
- Node platform target with external packages bundled

**Scripts**:
- `dev`: Development server with tsx runtime
- `build`: Production build (frontend + backend)
- `start`: Run production server
- `check`: TypeScript type checking
- `db:push`: Drizzle Kit schema push to database

**Configuration Files**:
- TypeScript: Strict mode, ESNext modules, path aliases
- Vite: React plugin, custom aliases, Replit development plugins
- Tailwind: Custom color system, border radius scale, extended theme
- PostCSS: Tailwind and Autoprefixer plugins