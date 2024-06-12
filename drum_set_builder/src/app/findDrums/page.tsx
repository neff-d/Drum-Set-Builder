'use client';

import NavBar from "../components/navbar";
import { DrumsContextProvider, useDrumsContext } from "@/context/drumContext";
import getDrumData from "@/assets/getDrumData";

import { Grid, Paper, Box } from "@mui/material";
import { Drums } from "@/types/drums";
import DrumCard from "../components/drumCard";

export default function FindDrums() {

    const drums = getDrumData();

    return (
        <DrumsContextProvider>
            <div>
                <NavBar />
                <main>
                    <Box>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                        {
                            drums?.map((drums: Drums, i: number) => (
                                <Grid item xs={4}>
                                <DrumCard key={i} drumDetail={drums} />
                                </Grid>
                            ))
                        }
                        </Grid>
                    </Box>
                </main>
            </div>
        </DrumsContextProvider>
    )
}