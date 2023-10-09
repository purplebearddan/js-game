"use client";

import { createContext } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Game from "@/lib/Game";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const game = new Game();

const gameContext = createContext();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
