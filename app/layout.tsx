import QueryClientProvider from "./QueryClientProvider";
import NavBar from "./NavBar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <Theme appearance="light" accentColor="violet">
            <NavBar />
            <main className="p-5">
              <Container>{children}</Container>
            </main>
            {/* <ThemePanel /> */}
          </Theme>
        </QueryClientProvider>
      </body>
    </html>
  );
}
