import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import signinpic from "../../asset/images/image1.jpeg";
import Selectbox from '../../component/Select';


function Register() {

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
                            <Typography paddingLeft={3} variant='h4' >Create Account</Typography>
                        </Box>

                        <TextField
                            required
                            label="Full Name"
                            id='name'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        // type='number'
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />

                        <TextField
                            required
                            label="Email id"
                            id='email id'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        // type='number'
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />

                        <TextField
                            required
                            label="Phone Number"
                            id='phonenumber'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            type='number'
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button fullWidth={true} style={{ color: "black", backgroundColor: 'pink' }}
                            type="submit"
                            variant="contained"
                            margin="normal"
                            onClick={handleButtonClick}
                        >
                            Create Account
                        </Button>

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

export default Register;