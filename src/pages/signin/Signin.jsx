import { Box, Card, Typography } from "@mui/material";
import BasicCard from "../../component/Card";
import myPrimaryColor from '../../utils/Mytheme';
import { Headingtext } from "../../utils/Mytypography";

export default function Signin() {
    return (
        <Box sx={{ m: '2px'}}>
            {/* <BasicCard /> */}
            <Card sx={{ p: '10px', m: '5px', width: 600 }} >
                <Typography variant="h5" sx={{ fontFamily: 'Roboto' , fontWeight: 'bold' , color: 'black'}} color="text.secondary" gutterBottom>
                    Login / Register
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto', color: 'red'}} gutterBottom>
                    Please enter your Phone Number
                </Typography>
                <Headingtext name='Avinash'/>
            </Card>
        </Box>
    );
}