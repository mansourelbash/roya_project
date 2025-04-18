import type { Metadata } from "next";
import { Almarai } from "next/font/google";

import "./globals.css";

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'], 
  display: 'swap',
  variable: '--font-almarai', 
});

export const metadata: Metadata = {
  title: "رؤيا | الرئيسية",
  description: "تابع آخر الأخبار والبرامج المميزة على منصة رؤيا. اكتشف المحتوى العربي الترفيهي، الثقافي، والإخباري في مكان واحد.",
  icons: {
    icon: "app/favicon.ico/page.tsx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${almarai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
