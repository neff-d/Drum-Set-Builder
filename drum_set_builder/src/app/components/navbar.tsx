'use client';

import {
    AppBar,
    Box,
    Toolbar,
    Container,
    Button,
    IconButton,
    Avatar,
    Menu,
    MenuItem
} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useDrumsContext } from "@/context/drumsContext";

export default function NavBar() {

    const router = useRouter();
    const drums = useDrumsContext();

    function navigateToDrumset() {
        router.push('/drumset');
    }

    return (
        <header>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href={'/'} passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: "block", marginLeft: -32, verticalAlign: 'center' }}
                            >
                                Custom Drumset Builder
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href={'/findDrums'} passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: "block", marginLeft: -4, verticalAlign: 'center' }}
                            >
                                Find Drum Components
                            </Button>
                        </Link>
                    </Box>
                    <Box>
                        <Link href={'/drumset'} passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: "block", marginLeft: 12, verticalAlign: 'center'}}
                            >
                                My Drumset
                            </Button>
                        </Link>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}