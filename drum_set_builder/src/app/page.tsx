'use client';

import NavBar from "./components/navbar";
import { DrumsContextProvider } from "@/context/drumsContext";

export default function Home() {
  return (
    <DrumsContextProvider>
      <div>
        <NavBar />
        <main>
          Hello Final Project!
        </main>
      </div>
    </DrumsContextProvider>
  );
}
