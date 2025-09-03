# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React web application for an English learning game platform. The app uses React 19 with TypeScript, Material-UI (MUI) for components, and Vite for the build system. The application includes user authentication via Google OAuth and displays a dashboard of learning games.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

## Architecture

### Application Structure
- **Entry Point**: `src/main.tsx` - Sets up React root with Material-UI providers and React Router
- **App Component**: `src/App.tsx` - Main app component with theme, routing, and context providers
- **Context Management**: `src/common/MainContext.tsx` - Provides global state for user authentication and data
- **Configuration**: `src/common/config.ts` - API endpoints and app configuration

### Key Components
- **Authentication Flow**: 
  - Login page (`src/pages/Login.tsx`) for initial authentication
  - Callback page (`src/pages/Callback.tsx`) for OAuth callback handling
  - Homepage (`src/pages/Homepage.tsx`) displays game cards after authentication
- **Navigation**: `src/pages/TopNavigation.tsx` - Main navigation bar
- **Game Display**: `src/pages/GameCard.tsx` - Individual game card component

### State Management
The app uses React Context (`MainContext`) to manage:
- User authentication state
- User profile data (token, name, ID, avatar)
- Local storage persistence for user session

### Technology Stack
- **Frontend**: React 19, TypeScript, Material-UI v7
- **Build Tool**: Vite with React plugin
- **Routing**: React Router DOM v7
- **Authentication**: OIDC client (Google OAuth)
- **HTTP Client**: Axios
- **Additional UI**: Toolpad Core for dialogs

### API Configuration
- Base URL configured in `src/common/config.ts` (currently `http://localhost:5000/`)
- Contains helper methods for URL construction and request configuration

### File Organization
- `src/common/` - Shared utilities, types, and context
- `src/components/` - Reusable UI components
- `src/pages/` - Page-level components and routes
- `public/games/` - Static game assets (images, etc.)

### Authentication Flow
1. User lands on Login page (`/`)
2. OAuth authentication redirects to `/callback`
3. Successful auth redirects to Homepage (`/homepage`)
4. User data persisted in localStorage via MainContext

## Notes
- The app automatically redirects unauthenticated users to login
- User session is maintained via localStorage with the key defined in `Common.ts`
- All API calls should use the URL helper from `Config.getUrl()`