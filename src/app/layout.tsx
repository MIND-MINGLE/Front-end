"use client";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import Head from "next/head";
import { metadata } from "@/app/metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title) || "Default Title" }</title>
        <meta name="description" content={metadata.description || "Default description" } />
      </Head>
      <ThemeProvider theme={theme}>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
