import QueryClientProvider from "./QueryClientProvider";
import NavBar from "./NavBar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import AuthProvider from "./authProvider/Provider";

interface Props {
  children: ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.variable}>
        <AuthProvider>
          <QueryClientProvider>
            <Theme accentColor="violet">
              <NavBar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
              {/* <ThemePanel /> */}
            </Theme>
          </QueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
