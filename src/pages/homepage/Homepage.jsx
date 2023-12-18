import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import DrawerAppBar from '../../component/Appbar';
import { MYCOLOR } from '../../utils/Mycolor';
import { Box } from '@mui/material';
import HomeContent1 from '../../component/Homecontent';

export default function Homepage() {
    const navigate = useNavigate();

    function handler() {
        console.log("Clicked");
        navigate('/login');
    }

    return (
        <div>
            {/* Page Header */}
            <header>
                <DrawerAppBar />
            </header>

            {/* Content */}
            <HomeContent1 />

            {/* Page Footer */}
            <footer>

            </footer>
        </div >
    );
}