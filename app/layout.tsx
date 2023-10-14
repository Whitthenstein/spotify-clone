import "../styles/globals.scss";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import Player from "@/components/Player";
import getSongs from "@/actions/getSongs";

const font = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinderiku",
  description: "Listen to all of Pinderiku's songs!",
};

export const revalidate = 0;

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const userSongs = await getSongs();

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/img/logo.png"
        />
      </head>
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
