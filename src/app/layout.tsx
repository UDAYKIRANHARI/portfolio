import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hari Uday Kiran — AI/ML Developer & Full-Stack Engineer",
  description:
    "Portfolio of Hari Uday Kiran. AI/ML Developer, Full-Stack Engineer, and Automation Builder pursuing MSc Software Engineering at BTH, Sweden.",
  openGraph: {
    title: "Hari Uday Kiran — AI/ML Developer & Full-Stack Engineer",
    description:
      "Building intelligent systems at the intersection of AI, automation, and real-world product impact.",
    type: "website",
    locale: "en_US",
    siteName: "Hari Uday Kiran",
  },
  keywords: [
    "Hari Uday Kiran",
    "AI developer",
    "ML engineer",
    "full-stack",
    "portfolio",
    "BTH Sweden",
    "software engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
