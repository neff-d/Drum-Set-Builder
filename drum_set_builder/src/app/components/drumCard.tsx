import {
    Typography,
    Card,
    CardMedia,
    Box,
    CardContent,
    Container,
    Button,
    Grid,
    Paper
} from "@mui/material";

import { Drums } from "@/types/drums";
import { DrumsContextProvider } from "@/context/drumContext";

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
        <DrumsContextProvider>
        <Container sx={{width: 600, m: 2}}>
                <Card variant="outlined" sx={{ display: 'flex',
                    width: 600,
                    height: 560,
                    flexDirection: 'column',
                    backgroundColor: 'darkslategray',
                    border: '1px solid white' }}>
                    <Box sx={{ marginLeft: 10 }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 258, height: 210, p: 1 }}
                    image={props.drumDetail.imageUrl}
                    alt={`${props.drumDetail.model} image`}
                    />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography sx={{textTransform: "capitalize", m: "10px", color: 'white'}} component="span" variant="h2">
                            {props.drumDetail.maker}
                            </Typography>
                            <br />  
                            <Typography sx={{textTransform: "capitalize", m: "8px", color: 'white'}} component="span" variant="h4">
                            {props.drumDetail.model}
                            </Typography>   
                            <Typography sx={{textTransform: "capitalize", m: "4px", color: 'white'}} component="div" variant="h5">
                            {props.drumDetail.type}
                            </Typography>
                            <Typography sx={{textTransform: "capitalize", m: "4px", color: 'white'}} component="div" variant="h6">
                            Material: {props.drumDetail.material}
                            </Typography>
                            <Typography sx={{textTransform: "capitalize", m: "4px", color: 'white'}} component="div" variant="h6">
                            Dimensions: {props.drumDetail.dimensions}
                            </Typography>
                            <Box>
                                {
                                    props.drumDetail.soundClipUrl ?
                                    <audio controls> 
                                        <source src={props.drumDetail.soundClipUrl} type="audio/mp3" />
                                    </audio> :
                                    <div/>
                                }
                            </Box>
                            <Box sx={{  display: 'flex'}}>
                                {
                                    saved ?
                                        <Button
                                            variant="contained"
                                            onClick={handleSavedClick}
                                            sx={{ marginRight: 20 }}
                                        >
                                            Remove
                                        </Button> :
                                        <Button
                                            variant="contained"
                                            onClick={handleSavedClick}
                                        >
                                            Save
                                        </Button>
                                }
                            </Box>

                                
                        </CardContent>
                    </Box>
                </Card>
        </Container>
        </DrumsContextProvider>
    )
}

