'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Drums } from '@/types/drums';
import  getDrumData  from '@/assets/getDrumData';

import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface drumsContextProps {
    drums: Drums[],
    getSaved: Function,
}

const DrumsContext = createContext<drumsContextProps>({
    drums: [],
    getSaved: () => {[]},
})

export function DrumsContextProvider({children}: {children: ReactNode}) {
    const [drums, setDrums] = useState<Drums[]>([]);

    useEffect(() => {
        console.log(drums);
        if (drums) {
            setDrums(getDrums());
        }
        if (drums) {
            writeDrums(drums);
        }
    }, [drums])

    useEffect(() => {
        if (drums.length == 0){
            initDrums();
        }
    }, [])

    async function initDrums() {
        const drums = await readDrums();
        if (drums.length == 0) {
            const drumData = getDrumData();
            setDrums(drumData);
        }
        else {
            setDrums(drums);
        }
    }

    function getDrums() {
        return drums;
    }

    function getSaved() {
        return drums.filter((drums: Drums) => drums.saved);
    }

    function writeDrums(drums: Drums[]) {
        for (let i = 0; i < drums.length; i++) {
            setDoc(doc(db, "animals", i.toString()), drums[i]);
        }
    }

    async function readDrums() {

        let exists = true;
        let counter = 0;
        const drums = [];

        while (exists) {
            const docRef = doc(db, "drums", counter.toString());
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                drums.push(docSnap.data() as Drums);
                counter++;
            }
            else {
                exists = false;
            }
        }
        return drums;
    }

    return (
        <DrumsContext.Provider value={{ drums: drums, getSaved: getSaved }}>
            {children}
        </DrumsContext.Provider>
    )

}

export function useDrumsContext() {
    return useContext(DrumsContext);
}
