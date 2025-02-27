## [View Demo](https://soar-demo.vercel.app)

## Overview
Key features:

- **React Server Components** for improved initial load performance
- **Dynamic Lazy Loading** for each dashboard tile to prioritize critical content
- **Responsive Design** that adapts seamlessly from mobile to desktop

The dashboard includes modules for card management, transactions, activity tracking, expense statistics, quick transfers, and balance history.

## How to Run

1. Clone the repository

   ```
   git clone https://github.com/yourusername/soar.git
   cd soar
   ```

2. Install dependencies

   ```
   pnpm install
   ```

3. Start the development server

   ```
   pnpm dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```
pnpm build
pnpm start
```

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [React Query (TanStack Query)](https://tanstack.com/query)
- **Data Fetching**: SWR for real-time data
- **Visualization**: Chart.js with React-ChartJS-2
- **Monorepo Management**: Turborepo
- **Package Manager**: pnpm
- **Performance Optimization**:
  - Dynamic imports
  - Next.js App Router
  - React Server Components
  - Lazy loading with Suspense boundaries
- **Type Safety**: TypeScript

## Project Structure

The project is organized as a monorepo using Turborepo:

- `apps/web`: Main Next.js application
- `packages`: Shared components and configurations