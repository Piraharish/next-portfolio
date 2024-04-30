import { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piraharish | Portfolio",
  description:
    "A Personal Portfolio Website showcasing Piraharish's journey, powered by Next.js(React Framework) and Sanity.io(headless Content Management System), revealing insights about their skills and experiences.",
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://piraharish.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
