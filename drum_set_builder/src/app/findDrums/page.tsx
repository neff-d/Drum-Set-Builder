'use client';

import NavBar from "../components/navbar";

import { DrumsContextProvider, useDrumsContext } from "@/context/drumContext";
import getDrumData from "@/assets/getDrumData";
import { Drums } from "@/types/drums";
import DrumCard from "../components/drumCard";

import { useState, useEffect } from 'react';

import { 
    Grid,
    Box,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem, 
    SelectChangeEvent} from "@mui/material";

export default function FindDrums() {

    const [category, setCategory] = useState<string>("");

   // const { drums } = useDrumsContext();

    const drums: Drums[] = getDrumData();

    let categories: string[] = new Array<string>;

    categories.push('');
    for (let i = 0; i < drums.length; i++) {
        categories.push(drums[i].type);
    }
    categories = Array.from(new Set(categories));
    


    function handleChange(event: SelectChangeEvent) {
        setCategory(event.target.value as string);
    }

    useEffect(() => {

    }, [category, drums])


    return (
        <DrumsContextProvider>
            <div>
                <NavBar />
                <main>
                    <Container>
                        <Box sx={{ minWidth: 120, p: 2 }}>
                            <FormControl variant="filled" fullWidth>
                                <InputLabel
                                    id="category-select-label"
                                    sx={{ color: 'white'}}
                                >
                                    Select Category...
                                </InputLabel>
                                <Select     
                                    sx={{ color: 'white', border: '1px solid white'}}
                                    labelId="category-select-label"
                                    id="category-select"
                                    label="Category"
                                    value={category}
                                    onChange={handleChange}
                                >
                                    {
                                        categories.map((category: string, i: number) => (
                                            <MenuItem key={i} value={category}>{category}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </Container>
                    <Box>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                        {
                            drums?.map((drums: Drums, i: number) => (
                                drums.type == category ?
                                    <Grid key={i} item xs={4}>
                                    <DrumCard key={i} drumDetail={drums} />
                                    </Grid> :
                                <div key={i}></div>
                            ))
                        }
                        </Grid>
                    </Box>
                </main>
            </div>
        </DrumsContextProvider>
    )
}