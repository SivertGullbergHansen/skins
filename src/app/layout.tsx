import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { SessionProvider } from "@/components/SessionProvider";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sivert.io",
  description: "CS2 Servers hosted by Sivert.io",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-base-300 w-screen h-screen overflow-hidden p-8`}
      >
        <SessionProvider>
          <div className="w-full h-full flex rounded-2xl overflow-hidden">
            <Sidebar />
            <main className="w-full h-full bg-base-100 p-8">{children}</main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
