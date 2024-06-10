'use client';

import NavBar from "../components/navbar";
import { DrumsContextProvider } from "@/context/drumsContext";


export default function FindDrums() {
    return (
        <DrumsContextProvider>
            <div>
                <NavBar />
                <main>
                    Find Drums Page!!!
                </main>
            </div>
        </DrumsContextProvider>
    )
}