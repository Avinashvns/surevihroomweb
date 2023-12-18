
import { Box, Checkbox, Chip, Divider, FormControlLabel, FormGroup, Rating, Slider, Stack, Typography } from "@mui/material";
import React, { useState } from 'react';
import ChipList, { Simplechip } from "../component/Chip";
import AddIcon from '@mui/icons-material/Add';

const propertyChip = ['Hostel', 'Single Room','1 BHK', ' 2 BHK', '3 BHK'];
const availableChip = ['Student', 'Boys','Girls', 'Job'];

function Sidebar() {
    const [value, setValue] = useState([20, 35]);
    // const [ratingvalue, setRatingValue] =useState(3);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Box sx={{ textAlign: 'start', px: '10px' }} >
            <Typography color="red" variant='h6'>Price Range</Typography>

            <Typography variant='p'>$ {value[0]}<span style={{ margin: 10 }}>-</span>$ {value[1]}</Typography>
            <Slider aria-label="volume" valueLabelDisplay="auto" value={value} onChange={handleChange} sx={{ color: 'red' }} />

            <Divider sx={{ marginTop: 2, marginBottom: 2, bgcolor: 'grey' }} />

            {/* Available For */}
            <Typography color="red" variant='h6'>Available For</Typography>
                {/* <Simplechip name={'House'} icon={<AddIcon />} handlerClick={() => { console.log("clicked") }} /> */}
                <ChipList data={availableChip}/>   
            <Divider sx={{ marginTop: 2, marginBottom: 2, bgcolor: 'grey' }} />

            {/* Property types */}
            <Typography color="red" variant='h6'>Types of Property</Typography>
                {/* <Simplechip name={'House'} icon={<AddIcon />} handlerClick={() => { console.log("clicked") }} /> */}
                <ChipList data={propertyChip}/>   
            <Divider sx={{ marginTop: 2, marginBottom: 2, bgcolor: 'grey' }} />

            {/* Localities */}
            <Typography color="red" variant='h6'>Localities</Typography>
            <FormGroup sx={{ paddingLeft: 1, paddingTop: 1 }}>
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="Lanka" />
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="Sigra" />
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="BHU" />
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="Saket Nagar" />
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="Pandeypur" />
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="Sunderpur" />
            </FormGroup>
            <Divider sx={{ marginTop: 2, marginBottom: 2, bgcolor: 'grey' }} />

            <Typography color="red" variant='h6'>Discount</Typography>
            <FormGroup sx={{ paddingLeft: 1, paddingTop: 1 }}>
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="10% or More" />
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="20% or More" />
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="30% or More" />
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="40% or More" />
                <FormControlLabel control={<Checkbox {...{ inputProps: { 'aria-label': 'checkbox' } }} sx={{ p: 0, paddingRight: 2 }} />} label="50% or More" />
            </FormGroup>
            <Divider sx={{ marginTop: 2, marginBottom: 2, bgcolor: 'grey' }} />

            <Typography color="red" variant='h6'>Customer Review</Typography>
            <Box display='flex' flexDirection='column'  >
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                <Rating name="half-rating-read" defaultValue={4} readOnly />
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                <Rating name="half-rating-read" defaultValue={3} readOnly />
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Box>
            <Divider sx={{ marginTop: 2, marginBottom: 2, bgcolor: 'grey' }} />

        </Box>
    );
}

export default Sidebar;
