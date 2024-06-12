'use client';

import NavBar from "./components/navbar";
import { useDrumsContext, DrumsContextProvider } from "@/context/drumContext";
import { Drums } from "@/types/drums";
import DrumCard from "./components/drumCard";
import { useEffect } from "react";

export default function Home() {

  const { drums, getSaved } = useDrumsContext();

  useEffect(() => {
    console.log(drums);
  }, [drums])

  return (
    <DrumsContextProvider>
    <main>
        <NavBar />
      <div>
        Welcome to the custom drumset builder!
      </div>
    </main>
      </DrumsContextProvider>
  );
}
