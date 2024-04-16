import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "./navbar/page";
import Sidebar from "./sidebar/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable}`} data-theme="bumblebee" lang="en">
      <body>
        <Theme
          appearance="dark"
          accentColor="blue"
          grayColor="mauve"
          radius="large"
          scaling="110%"
        >
          <div className="flex flex-col m-auto">
            <div>
              <Navbar />
            </div>
            <div className="flex flex-row">
              <div className="sidebar flex-none ml-24 w-2/12 min-w-64 h-screen mr-5">
                <Sidebar />
              </div>
              <main className="flex-1 main p-5 container">{children}</main>
            </div>
          </div>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
