'use client';

import NavBar from "./components/navbar";
import { useDrumsContext } from "@/context/drumContext";
import { useEffect } from "react";

export default function Home() {

  const { drums, featured } = useDrumsContext();

  useEffect(() => {
    console.log(drums);
  }, [drums])

  return (
    <main>
        <NavBar />

      </main>
  );
}
