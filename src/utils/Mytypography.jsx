import React from 'react';
import { Typography } from "@mui/material";
import { MYCOLOR } from '../utils/Mycolor';

const Headingtext = ({ name, flexGrow, fontFamily, whiteColor, display }) => {
    return (
        <>
            <Typography variant="h6" sx={{
                flexGrow: flexGrow == null ? 0 : flexGrow,
                display: display,
                fontFamily: 'Roboto',
                fontWeight: fontFamily == null ? 'normal' : fontFamily,
                color: whiteColor ? MYCOLOR.whitetext : MYCOLOR.blacktext
            }} gutterBottom>
                {name}
            </Typography>
        </>
    );
}

const Subtitletext = ({ name, fontWeight, whiteColor }) => {
    return (
        <>
            <Typography variant="subtitle1"
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: fontWeight,
                    color: whiteColor ? MYCOLOR.whitetext : MYCOLOR.blacktext
                }} gutterBottom>
                {name}
            </Typography>
        </>
    );
}

const Bodytext = ({ name, fontWeight , whiteColor }) => {
    return (
        <>
            <Typography variant="body2"
                sx={{
                    fontFamily: 'Roboto',
                    fontWeight: { fontWeight },
                    color: whiteColor ? MYCOLOR.whitetext : MYCOLOR.blacktext
                }} gutterBottom>
                {name}
            </Typography>
        </>
    );
}

export { Headingtext, Subtitletext, Bodytext };