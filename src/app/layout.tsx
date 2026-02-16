import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { HeaderProvider } from "@/components/HeaderContext";
import { Footer } from "@/components/Footer";

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const zen = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "物語の泉 — AI小説ライブラリ",
  description:
    "生成AIが創り出す多彩なジャンルの小説を、いつでも自由にお読みいただけます。ミステリーから青春小説まで、無限に広がる物語の泉へようこそ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${shippori.variable} ${zen.variable} font-sans leading-relaxed`}>
        <HeaderProvider>
          <Header />
          {children}
          <Footer />
        </HeaderProvider>
      </body>
    </html>
  );
}
