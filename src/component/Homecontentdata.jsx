import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import Cardpic from "../asset/images/image1.jpeg";
import { Bodytext, Headingtext, Subtitletext } from "../utils/Mytypography";
import { Outlinedbutton, Simplebutton } from "../utils/Mybutton";

function Homecontentdata(){
    return (
        <Card sx={{ padding: '10px', borderRadius: '10px' , mb: '10px' }} >
                        <Grid container >

                             {/* Property Image */}
                            <Grid xs={6} md={5}>
                                <Card sx={{textAlign: 'center'}} style={{ borderRadius: '10px' }}>
                                    <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                image={Cardpic}
                                                alt='Card image'
                                            />
                                    </CardActionArea>
                                </Card>         
                            </Grid>

                            {/* Property Details */}
                            <Grid xs={6} md={7}>
                            <Box paddingLeft={2}>
                                
                                <Headingtext name={'Lanka Varanasi'} fontFamily={'bold'}/>
                                <Subtitletext name={'Boys Hostel in Lanka'} color="true"/>
                                <Headingtext name={'₹ 6,500'} fontFamily={'bold'}/>
                                <Subtitletext name={'Room Available'} color="true"/>
                                <Bodytext name={'2 Bed / 1 Cooler'} />

                                <Box sx={{display: 'flex' }}>
                                    <Outlinedbutton name={"VIEW NUMBER"}  fulwidth={true} />
                                    <Box sx={{width: '20px'}}></Box>
                                    <Simplebutton fulwidth={true} name={'CONTACT'} variant={'contained'} whitetext={true} bgprimary={true}/>
                                </Box>
                                
                            </Box>
                                
                            </Grid>
                        </Grid>
                    </Card>
    );
}

export default Homecontentdata;