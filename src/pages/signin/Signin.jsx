// import { Box, Card, Typography } from "@mui/material";
// import BasicCard from "../../component/Card";
// import myPrimaryColor from '../../utils/Mytheme';
// import { Headingtext } from "../../utils/Mytypography";

// export default function Signin() {
//     return (
//         <Box sx={{ m: '2px'}}>
//             {/* <BasicCard /> */}
//             <Card sx={{ p: '10px', m: '5px', width: 600 }} >
//                 <Typography variant="h5" sx={{ fontFamily: 'Roboto' , fontWeight: 'bold' , color: 'black'}} color="text.secondary" gutterBottom>
//                     Login / Register
//                 </Typography>
//                 <Typography variant="h6" sx={{ fontFamily: 'Roboto', color: 'red'}} gutterBottom>
//                     Please enter your Phone Number
//                 </Typography>
//                 <Headingtext name='Avinash'/>
//             </Card>
//         </Box>
//     );
// }


import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import signinpic from "../../asset/images/image1.jpeg";
import Selectbox from '../../component/Select';


function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    })
    );

    const [open, setOpen] = useState(false);

    const handleButtonClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container spacing={2} sx={{ border: '40px solid pink', borderRadius: 2 }} >
                {/* Image use */}
                <Grid item xs={12} md={8} >
                    <Box padding={5} >
                        <img src={signinpic} alt='Sign in image' style={{ width: '100%', maxWidth: '100%', borderRadius: 20 }} />
                    </Box>

                </Grid>
                {/* Login Form */}

                <Grid item xs={12} md={4} px={2} paddingTop={5} spacing={5}  >

                    <form onSubmit={handleSubmit} >
                        <Box display='flex' xs={12} paddingBottom={2}  >
                            <img src={signinpic} alt='Sign in pic' width={50} style={{ borderRadius: 15 }} />
                            <Typography paddingLeft={3} variant='h4' >Sign In Form</Typography>
                        </Box>

                        <Typography align='left' variant='h6'>Please Enter Your Login Details</Typography>

                        <TextField
                            required
                            label="Name"
                            id='name'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />

                        <TextField
                            required
                            label="Email"
                            id='email'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        // helperText="Enter Email Id"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        />

                        <Box py={1}></Box>
                        <Selectbox />
                        <Box pb={2}></Box>

                        {/* <Box display='flex' flexDirection='row-reverse'>
                            <Button href='#' align='start'>Forget Password?</Button>
                        </Box> */}

                        <Button fullWidth={true} style={{ color: "black", backgroundColor: 'pink' }}
                            type="submit"
                            variant="contained"
                            // color="primary"
                            margin="normal"
                            // onClick={() => {
                            //     <Alert severity='error' >hi</Alert>
                            // }}
                            onClick={handleButtonClick}
                        >
                            Create Account
                        </Button>

                        {/* <Alert severity='error'>This is data</Alert> */}

                        {/* <Box display='flex' alignItems='center' py={2}>
                            <Typography>Don`t have an account</Typography>
                            <Button href='/signup'>Register</Button>
                        </Box> */}

                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Alert</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    User Logined Successful.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>OK</Button>
                                <Button onClick={handleClose}>Closed</Button>
                            </DialogActions>
                        </Dialog>
                    </form>
                </Grid>

            </Grid>
        </Box>
    );
}

export default SignIn;