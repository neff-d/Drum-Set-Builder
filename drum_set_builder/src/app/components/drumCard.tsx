import {
    Typography,
    Card,
    CardMedia,
    Box,
    CardContent,
    Container,
    Grid,
    Paper
} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import { Drums } from "@/types/drums";

import { useEffect, useState } from "react";

export default function DrumCard(props: {drumDetail: Drums}) {
    const [saved, setSaved] = useState(props.drumDetail.saved);

    function handleSavedClick() {
        setSaved(!saved);
    }

    useEffect(() => {
        props.drumDetail.saved = saved;
    }, [saved])

    return (
        <Container sx={{width: 600, m: 2}}>
                <Card sx={{ display: 'flex', width: 640, flexDirection: 'column', backgroundColor: 'darkslategray' }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 224, p: 1 }}
                    image={props.drumDetail.imageUrl}
                    alt={`${props.drumDetail.model} image`}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography sx={{textTransform: "capitalize", m: "10px"}} component="span" variant="h3">
                            {props.drumDetail.maker}
                            </Typography>  
                            <Typography sx={{textTransform: "capitalize", m: "10px"}} component="span" variant="h4">
                            {props.drumDetail.model}
                            </Typography>   
                            <Typography sx={{textTransform: "capitalize", m: "4px"}} component="div" variant="h5">
                            {props.drumDetail.type}
                            </Typography>
                                {
                                    props.drumDetail.soundClipUrl?
                                    <audio controls> 
                                        <source src={props.drumDetail.soundClipUrl} type="audio/mp3" />
                                    </audio> :
                                    <div/>
                                }
                                

                                
                        </CardContent>
                    </Box>
                </Card>
        </Container>
    )
}

