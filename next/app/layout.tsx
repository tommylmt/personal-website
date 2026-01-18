import type { Metadata } from "next";
import "./globals.css";
import MenuHelper from "@/src/utils/MenuHelper";
import NavBar from "@/src/components/menu/NavBar";

export const metadata: Metadata = {
  title: "Hello, I'm Thomas",
  description: "Hello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuHelper = new MenuHelper('/'); // TODO fetch current route

  return (
    <html lang="en">
       <body className="dark:bg-black overflow-x-hidden">
         <NavBar pages={menuHelper.routes} />

         <main id="main">
          {children}
         </main>
      </body>
    </html>
  );
}
