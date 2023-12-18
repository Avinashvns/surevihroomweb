import React from 'react';
import { Button, Typography } from "@mui/material";
import { MYCOLOR } from '../utils/Mycolor';

const Simplebutton = ({ name, bgprimary, whitetext ,fulwidth }) => {
    return (
        <>
            <Button variant='outlined' 
                sx={{
                    backgroundColor: bgprimary ?  MYCOLOR.primary : 'pink'  ,
                    color : whitetext ? MYCOLOR.whitetext : MYCOLOR.blacktext,
                    width: fulwidth ? '100%' : 'auto',
                    // padding: padding || '8px', // Set padding based on the prop or use a default value
                }}>
                {name}
            </Button>
        </>
    );
}

const Outlinedbutton = ({ name,fulwidth}) => {
    return (
        <>
            <Button variant='outlined' 
                sx={{
                    // backgroundColor: bgprimary ?  MYCOLOR.primary : 'pink'  ,
                    borderColor: MYCOLOR.primary,
                    color : MYCOLOR.blacktext,
                    width: fulwidth ? '100%' : 'auto',
                }}>
                {name}
            </Button>
        </>
    );
}


export {Simplebutton , Outlinedbutton };