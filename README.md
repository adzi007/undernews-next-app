## 📣 **Project Overview**

Undernews is a modern news platform that delivers timely and curated news articles with a focus on user engagement. Built with a sleek and responsive frontend using Next.js and React, Undernews offers a smooth reading experience, user registration, and interactive comment functionality..

The website is built using **Next.js** with **HyGraph CMS** and utilizes **GraphQL** for comunication between front-end and back-end.

## 🚀 **Key Features**
- News Feed – Dynamic content fetched via GraphQL from Hygraph
- Authentication – User registration and login powered by NextAuth.js with Supabase as the adapter
- Comments – Authenticated users can post comments on articles
- Responsive UI – Built with React and Bootstrap for a clean, accessible design
- State Management – Powered by Apollo Client for efficient GraphQL queries and caching

## 🧰 **Tech Stack**
- Frontend: Next.js 13, React, TypeScript, Bootstrap
- Backend: Hygraph (GraphQL Headless CMS)
- Authentication: NextAuth.js + Supabase Adapter
- Data Fetching: Apollo Client + GraphQL Request
- Linting: ESLint + TypeScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.