import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode
} from 'react';

import { db } from '../firebase';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { Drums } from '@/types/drums';

type DrumSettings = {
    id: string,
    maker: string,
    model: string,
    type: string,
    dimensions: string,
    imageUrl: string,
    soundClipUrl: string
};

const DrumsContext = createContext<
| {
    drums: Drums | null;
    drumSettings: DrumSettings | null;
    saveDrumSettings: Function;
} | undefined
>(undefined)

export function DrumsContextProvider({ children }: { children: ReactNode }) {
    const [drums, setDrums] = useState<Drums | null>(null);
    const [drumSettings, setDrumSettings] = useState<DrumSettings | null>(null);

    function saveDrumSettings(
        id: string,
        maker: string,
        model: string,
        type: string,
        dimensions: string,
        imageUrl: string,
        soundClipUrl: string
    ) {
        console.log(drums);
        console.log(drumSettings);

        if (drums != null) {
            setDrumSettings({
                id: id,
                maker: maker,
                model: model,
                type: type,
                dimensions: dimensions,
                imageUrl: imageUrl,
                soundClipUrl: soundClipUrl
            });
        }
    }

    useEffect(() => {
        writeDrumSettings(drumSettings);
    }, [drumSettings]);

    async function findDrums(drums: Drums | null) {
        setDrums(drums);

        if (drums !== null) {
            setDrumSettings(await findDrumSettings(drums.id))
        }
        else {
            setDrumSettings(null);
        }
    }

    return (
        <DrumsContext.Provider value={{ drums, drumSettings, saveDrumSettings  }}>
            {children}
        </DrumsContext.Provider>
    );
}

async function findDrumSettings(id: string) {
    const docRef = doc(db, "drums", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return {
            id: docSnap.id,
            maker: data.maker,
            model: data.model,
            type: data.type,
            dimensions: data.dimensions,
            imageUrl: data.imageUrl,
            soundClipUrl: data.soundClipUrl
        };
    }
    else {
        return null;
    }
}

function writeDrumSettings(drumSettings: DrumSettings | null | undefined) {
    if (drumSettings != null) {
        setDoc(doc(db, "drums", drumSettings.id), {
            maker: drumSettings?.maker,
            model: drumSettings?.model,
            type: drumSettings?.type,
            dimensions: drumSettings?.dimensions,
            imageUrl: drumSettings?.imageUrl,
            soundClipUrl: drumSettings?.soundClipUrl
        });
    }
}

export function useDrumsContext() {
    const context = useContext(DrumsContext);
    return context?.drums;
};

export function useDrumsSettingsContext() {
    const context = useContext(DrumsContext);
    return context?.drumSettings;
};

export function useSaveDrumsSettingsContext() {
    const context = useContext(DrumsContext);
    return context?.saveDrumSettings;
};