'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Drums } from '@/types/drums';
import  getDrumData  from '@/assets/getDrumData';

import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface drumsContextProps {
    drums: Drums[] | null,
    getSaved: Function,
    featured: Drums | null
}

const DrumsContext = createContext<drumsContextProps>({
    drums: null,
    getSaved: () => {[]},
    featured: null
});

export  function DrumsContextProvider({children}: {children: ReactNode}) {
    const [drums, setDrums] = useState<Drums[]>([]);
    const [featured, setFeatured] = useState<Drums | null>(null);

    const drumCount = 10;

    useEffect(() => {
        if (drums) {
            setDrums(getDrums());
        }
        if (!featured) {
            setFeatured(drums[getRandomInt(drums.length)])
        }
    }, [drums])

    useEffect(() => {
        if (drums && drums.length == 0) {
            initDrums();
        }
    }, [])

    async function initDrums() {
        if (drums.length == 0) {
            setDrums(getDrumData());
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

    return (
        <DrumsContext.Provider value={{ drums: drums, getSaved: getSaved, featured: featured }}>
            {children}
        </DrumsContext.Provider>
    )

}

export function useDrumsContext() {
    return useContext(DrumsContext);
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}