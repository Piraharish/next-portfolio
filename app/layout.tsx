import { Help } from "@/components/help/Help";
import { Navbar } from "@/components/hoc/Navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/Scroll-to-top";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeShortcut } from "@/providers/theme-shortcut";
import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piraharish.vercel.app"),

  title: {
    default: "Piraharish — Full-Stack Developer",
    template: "%s — Piraharish",
  },

  description:
    "Full-stack developer building web applications that feel simple on the surface and thoughtfully engineered underneath.",

  keywords: [
    "Piraharish",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "ASP.NET Core Developer",
    "TypeScript Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Piraharish",
    },
  ],

  creator: "Piraharish",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Piraharish",
    title: "Piraharish — Full-Stack Developer",
    description: "Simple interfaces. Thoughtful engineering.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Piraharish — Full-Stack Developer",
    description: "Simple interfaces. Thoughtful engineering.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        nunitoSans.variable,
        caveat.variable,
      )}
    >
      <body className="min-h-full flex flex-col scrollbar-thin">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <ThemeShortcut />
          <Suspense>
            <Navbar />
          </Suspense>
          <Suspense>
            <ScrollToTop />
          </Suspense>
          {children}
          <Suspense>
            <Help />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
