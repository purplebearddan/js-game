"use client";

import Player from "@/lib/Entities/Player";
import Map from "@/lib/World/Map";
import { useRef } from "react";

export default function Home() {
  return (
    <main>
      {...new Map(
        [
          new Player({
            name: "Link",
            playerName: "mowglixx",
            entityClass: "Bard",
            inventory: [],
            equipped: {},
          }),
        ],
        4
      )
        .giveMap()
        .whyNo()}
    </main>
  );
}
