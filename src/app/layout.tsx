import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { SessionProvider } from "@/components/SessionProvider";
import { Toaster } from "react-hot-toast";
import themes from "daisyui/src/theming/themes";
import { FaExclamation, FaTriangleExclamation } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

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
              toastOptions={{
                error: {
                  style: {
                    background: "oklch(var(--wa))",
                    color: "var(oklch(var(--wac)))",
                    fontWeight: 400,
                  },
                  icon: <FaTriangleExclamation className="min-w-4 max-w-4" />,
                  duration: 5000,
                },
                blank: {
                  style: {
                    background: "oklch(var(--a))",
                    color: "var(oklch(var(--ac)))",
                    fontWeight: 400,
                  },
                  icon: <FaInfoCircle className="min-w-4 max-w-4" />,
                  duration: 5000,
                },
              }}
            />
            <main className="w-full h-full bg-base-100 p-8">{children}</main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
