'use client';

import NavBar from "../components/navbar";

import { DrumsContextProvider } from "@/context/drumContext";
import DrumSet from "../components/drumset";


export default function Drumset() {

    return (
        <DrumsContextProvider>
            <div>
                <NavBar />
                <main>
                    <DrumSet />
                </main>
            </div>
        </DrumsContextProvider>
    )
}