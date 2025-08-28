import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Financio",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>  
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-blue-50 dark:bg-neutral-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
                <p>2025 ©️ Samriddho Biswas</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
      
    </ClerkProvider>
  );
}
