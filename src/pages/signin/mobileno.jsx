import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import signinpic from "../../asset/images/image1.jpeg";
import Selectbox from '../../component/Select';
import { useNavigate } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import auth from '../../firebase/Firebasesetup';


const Mobileno = () => {

    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
            // console.log(confirmation);
            setUser(confirmation);
        }
        catch (err) {
            console.error(err);
        }

    }
    const verifyOtp = async () => {
        try {
            const otpdata = await user.confirm(otp);
            console.log(otpdata);
        } catch (err) {
            console.error(err);
        }

    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({ email, password });
        console.log({ phone });
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
        sendOtp();
        // setOpen(true);
        // navigate('/register');
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

                    {/* <form onSubmit={handleSubmit} >
                        <Box display='flex' xs={12} paddingBottom={2}  >
                            <img src={signinpic} alt='Sign in pic' width={50} style={{ borderRadius: 15 }} />
                            <Typography paddingLeft={3} variant='h4' >Login / Register</Typography>
                        </Box>

                        <Typography align='left' variant='h6'>Please Enter Your Login Details</Typography>

                        <TextField
                            required
                            label="Phone Number"
                            id='phone'
                            defaultValue=''
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            // type='number'
                            // value={password}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <Button fullWidth={true} style={{ color: "black", backgroundColor: 'pink' }}
                            type="submit"
                            variant="contained"
                            margin="normal"
                            onClick={handleButtonClick}
                        >
                            Continue
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
                    </form> */}
                    <h1>Print Firebase</h1>
                    <input placeholder='Phone number' onChange={(e) => setPhone(e.target.value)} />
                    {/* <div id='recaptcha'>

                    </div> */}
                    <button onClick={sendOtp}>Send</button>

                    <h1>Verify Otp</h1>
                    <input placeholder='Otp' onChange={(e) => setOtp(e.target.value)} />
                    <button onClick={verifyOtp}>Verify OTP</button>

                    <TextField
                        required
                        label="Phone Number"
                        id='phone'
                        defaultValue=''
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        // type='number'
                        // value={password}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Box id='recaptcha'></Box>
                    {/* <div id='recaptcha'>

                    </div> */}
                    <Button fullWidth={true} style={{ color: "black", backgroundColor: 'pink' }}
                        type="submit"
                        variant="contained"
                        margin="normal"
                        onClick={sendOtp}
                    >
                        Continue
                    </Button>

                </Grid>

            </Grid>
        </Box>
    );
}

export default Mobileno;