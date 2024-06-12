import { DrumsContextProvider, useDrumsContext } from "@/context/drumContext";
import { Drums } from '@/types/drums';
import DrumCard from "../components/drumCard";
import { Grid } from "@mui/material";

import { useState, useEffect } from 'react';

const DrumSet = () => {

    const { drums, getSaved } = useDrumsContext();

    useEffect(() => {

    }, [getSaved])

    return (
        <DrumsContextProvider>
            <div>
                <main>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                    {
                        getSaved().map((drums: Drums, i: number) => (
                            <DrumCard key={i} drumDetail={drums} />

                        ))
                    }
                </Grid>
                </main>
            </div>
        </DrumsContextProvider>
    )
}

export default DrumSet;