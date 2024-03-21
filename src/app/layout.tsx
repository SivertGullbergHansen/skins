import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { SessionProvider } from "@/components/SessionProvider";
import { Toaster } from "react-hot-toast";

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
            <Toaster
              position="top-left"
              containerStyle={{
                top: 64,
                left: 64,
                bottom: 64,
                width: 300 - 64,
                overflow: "hidden",
              }}
            />
            <main className="w-full h-full bg-base-100 p-8">{children}</main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
