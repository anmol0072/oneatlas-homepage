# OneAtlas.dev - AI-Native Internal Tools Platform

![OneAtlas Hero](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3)

OneAtlas is an AI-powered internal tools platform designed to empower Product Managers, Engineers, and Operators to build, deploy, and scale internal applications instantly. It uses generative AI to instantly scaffold Next.js applications and Prisma database schemas without writing boilerplate code.

This project was built as an internship trial submission.

## 🚀 Features & References

We drew inspiration from the industry's best developer tools and AI platforms to create a premium, internship-winning experience:

### 1. Premium Landing Page Architecture
- **Reference:** Replit, Vercel, Supabase
- **Features:** 
  - A dark-themed, glassmorphic Mega Menu navigation bar.
  - Interactive "Hover-Lift" template cards that respond to user interaction.
  - A highly polished hero section utilizing custom CSS variable-driven brand gradients.
  - An infinite-scrolling marquee of supported AI models.
  - Transparent, toggleable pricing tier cards.
  - Interactive Role-based tab selection demonstrating the platform's multi-persona utility.
  - **Enterprise Integrations Array:** Visual demonstration of ecosystem compatibility (PostgreSQL, Slack, GitHub, Auth0).
  - **Code Export & No Vendor Lock-In Panel:** Dedicated section emphasizing Next.js/Prisma code exportability (a major enterprise selling point).

### 2. Custom Bespoke Login Flow
- **Reference:** Clerk Auth, Lovable.dev, Linear
- **Features:** 
  - A complete departure from "generic AI generated" layouts.
  - Split-screen layout with an animated mesh-gradient background on the branding side.
  - Polished Google OAuth Integration (via `next-auth@beta`).
  - Micro-interactions (like the Google icon scaling on hover).

### 3. Builder / AI Generation Mockup
- **Reference:** v0 by Vercel, Lovable.dev
- **Features:** 
  - The `/builder` route provides a canvas interface showcasing how users will interact with the AI to generate apps.
  - Interactive prompt textarea.
  - Sidebar for draggable elements and top navigation for publishing and database connections.

### 4. Complete MVP Scope (Phase 1)
- **Conversational App Generator:** Generate full-stack Next.js/Prisma code using conversational AI prompts.
- **CRUD & Dashboard Generation:** Instantly scaffold internal tables, admin panels, and CRMs.
- **Basic Workflow Support:** A lightweight automation engine for background tasks.
- **One-Click Deployment:** Automatic deployment of generated apps to isolated subdomains (e.g. `crm.oneatlas.app`).
- **Multi-Tenant Architecture:** Built from the ground up for B2B with schema isolation.
- **AI Gateway Abstraction:** Centralized AI routing (OpenAI, Anthropic, DeepSeek) for cost optimization.
- **Template Library with Live Preview:** A category browser and template grid offering instant previews of generated internal tools.

## 🛠 Tech Stack & Project Structure

This project uses an enterprise-grade Monorepo architecture managed by **Turborepo**.

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v4, Framer Motion, shadcn/ui primitives, Lucide React icons
- **Auth:** NextAuth (Auth.js) v5
- **Package Manager:** npm

### Monorepo Layout (`/apps` & `/packages`)
The files are arranged cleanly in the following order:

```text
oneatlas/
├── apps/
│   ├── web/               # The main public-facing marketing site & auth (Completed)
│   ├── dashboard/         # The logged-in user's workspace management
│   ├── builder/           # The actual AI generation canvas app
│   └── runtime/           # The edge runtime serving the generated user apps
├── packages/
│   ├── ai/                # Shared LLM routing and prompt logic
│   ├── auth/              # Shared authentication session logic
│   ├── db/                # Shared Prisma client and schemas
│   ├── ui/                # Shared React component library
│   └── ts-config/         # Shared TypeScript configs
└── package.json           # Root workspace configuration
```

## 🏎 Getting Started

To run the platform locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment Variables:**
   Navigate to `apps/web` and create a `.env.local` file:
   ```env
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   AUTH_SECRET="random_secret_string"
   ```

3. **Start the Development Server:**
   From the root of the monorepo:
   ```bash
   npm run dev
   ```
   *Or navigate to `apps/web` and run `npm run dev` directly.*

4. **View the Application:**
   Open [http://localhost:3000](http://localhost:3000) to see the main landing page, then navigate to `/login` or click "Start Building" to see the custom-built application views.
