import React from 'react';
import { Box, Button, Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import Sidebar from './Sidebar';
import { MYCOLOR } from '../utils/Mycolor';
import { Bodytext, Headingtext, Subtitletext } from '../utils/Mytypography';
import Cardpic from "../asset/images/image1.jpeg";
import { Image } from '@mui/icons-material';
import { Outlinedbutton, Simplebutton } from '../utils/Mybutton';
import Homecontentdata from './Homecontentdata';

function HomeContent1() {

    return (
        <Box paddingTop={1} >
            <Grid container spacing={2} >

                {/* Sidebar */}
                <Grid xs={4} md={3} sx={{ p: 2, backgroundColor: MYCOLOR.secondary }}>
                    <Sidebar />
                </Grid>

                {/* Content */}
                <Grid xs={8} md={9} style={{ backgroundColor: 'white' }} paddingLeft={2} paddingRight={2} >
                    <Headingtext name={'Show Result'} />
                    <Homecontentdata />
                    <Homecontentdata />
                    <Homecontentdata />

                </Grid>
            </Grid>
        </Box>
    );
}

export default HomeContent1;