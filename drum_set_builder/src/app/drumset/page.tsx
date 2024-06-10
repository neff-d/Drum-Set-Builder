'use client';

import NavBar from "../components/navbar";
import { DrumsContextProvider } from "@/context/drumsContext";


export default function Drumset() {
    return (
        <DrumsContextProvider>
            <div>
                <NavBar />
                <main>
                    Drumset Page!!!
                </main>
            </div>
        </DrumsContextProvider>
    )
}