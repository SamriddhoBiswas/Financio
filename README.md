<h1 align="center">💲Financio💲</h1>

![image](public/logo.png)
A finance management platform that lets users securly track expenses, plan budgets, manage multiple accounts with AI-powered receipt scanning, automated recommendations, and a user-friendly interface.
---

## 🚀 Features
-   **Expense Tracking:** Log and categorize expenses with ease.
-   **Budget Planning:** Create and manage monthly/weekly budgets.
-   **Multi-Account Support:** Manage multiple accounts in one place.
-   **Spending Insights:** Visualize spending trends and analyze
    patterns.
-   **AI-Powered Receipt Scanning:** Automatically extract and log
    transaction details from receipts.
-   **Automated Insights:** Receive automated financial insights and recommendations.
-   **User Authentication:** Secure sign-up, login, and user management with Clerk.
-   **Responsive UI:** Built with Tailwind CSS and Shadcn UI.

---

## 🛠 Tech Stack

-   **Next.js (App Router)**
-   **Clerk** for authentication and organization membership
-   **Prisma** with a **Supabase** database
-   **React** (client components) and server actions
-   **Tailwind CSS** and **Shadcn UI** for styling
-   **Luciide React** for Icons and **next-themes** for theme toggle

---

![image](public/financio_landing.jpeg)

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/financio.git
cd financio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following (update with your own values):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = your_clerk_publishable_key
CLERK_SECRET_KEY = your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=sign-up
DATABASE_URL= Connect to Supabase via connection pooling
DIRECT_URL= Direct connection to the database. Used for migrations
ARCJET_KEY = your_arcjet_key
```

### 4. Set up the database

Run Prisma migrations and generate the client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 📂 Project Structure

    FINANCIO/
    │── .next/               # Next.js build output
    │── actions/             # Server actions
    │── app/                 # App router pages and layouts
    │── components/          # Reusable React components
    │── data/                # Static or seeded data
    │── hooks/               # Custom React hooks
    │── lib/                 # Utility functions and helpers
    │── node_modules/        # Dependencies
    │── prisma/              # Prisma schema and migrations
    │── public/              # Public assets (images, icons, etc.)
    │── .env                 # Environment variables
    │── .gitignore
    │── components.json      # Shadcn UI config
    │── eslint.config.mjs    # ESLint configuration
    │── jsconfig.json        # Path aliases
    │── middleware.js        # Middleware for authentication/redirects
    │── next.config.mjs      # Next.js configuration
    │── package.json         # Project metadata and scripts
    │── package-lock.json    # Dependency lock file
    │── postcss.config.mjs   # PostCSS configuration
    │── README.md            # Project documentation

---

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npx prisma migrate dev` – Run database migrations
- `npx prisma generate` – Generate Prisma client

---

## 🤝 Contributing

Contributions are welcome! Fork this repo and submit a pull request.

---

<h3 align="center">2025 ©️ Samriddho Biswas</h3>



