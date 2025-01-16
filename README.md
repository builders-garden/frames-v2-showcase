# Frames v2 Showcase

This project demonstrates various implementations and use cases of Farcaster Frames v2, built with Next.js.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the showcase.

## Features

- Multiple Frame examples
- Implementation patterns for common use cases
- Integration with Next.js App Router
- TypeScript support

## Project Structure

- `/app` - Main application code and Frame routes
- `/components` - Reusable Frame components
- `/utils` - Helper functions for Frame handling

## Development Setup

1. Clone the repository

```bash
git clone git@github.com:builders-garden/frames-v2-showcase.git
cd frames-v2-showcase
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:

```
# NextAuth generate your secret with `openssl rand -base64 32`
NEXTAUTH_SECRET="<YOUR_NEXTAUTH_SECRET>"
NEXTAUTH_URL="http://localhost:3000"

NEXT_PUBLIC_URL="http://localhost:3000"

NEYNAR_BASE_URL="https://api.neynar.com/v2"
NEYNAR_API_KEY="<YOUR_NEYNAR_API_KEY>"

TURSO_DATABASE_URL="<YOUR_TURSO_DATABASE_URL>"
TURSO_AUTH_TOKEN="<YOUR_TURSO_AUTH_TOKEN>"
```

4. Start the development server

```bash
npm run dev
```

## Learn More

To learn more about Farcaster Frames:

- [Farcaster Frames Documentation](https://docs.farcaster.xyz/reference/frames/spec)
- [Frames.js Documentation](https://framesjs.org)
