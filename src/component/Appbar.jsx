import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { MYCOLOR } from '../utils/Mycolor';
import {Bodytext, Headingtext, Subtitletext} from '../utils/Mytypography';
import SearchAppBar from './Searchappbar';


const drawerWidth = 240;
const navItems = ['Home', 'Tenant', 'Owner' ,'About', 'Contact'];
const navRoutes = ['/', '/login', '/','/login', '/'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' , bgcolor: MYCOLOR.secondary }}>
            <Box sx={{ bgcolor: MYCOLOR.primary , p: 2 , color: MYCOLOR.whitetext , textAlign: 'start' }}> 
                <Headingtext name={'SUREVIH'} /> 
                <Bodytext name={'ROOM RENT'} />     
            </Box>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton href={navRoutes[index]} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{bgcolor: MYCOLOR.primary}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Headingtext name={'SUREVIH ROOM'} flexGrow={1}  whiteColor={true} display={{ xs: 'none', sm: 'block' }}/>
                    <Box sx={{ display: { xs: 'none', sm: 'none' , md: 'block' } }}>
                        {navItems.map((item, index) => (
                            <Button key={item} href={navRoutes[index]} sx={{ color: MYCOLOR.whitetext }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <SearchAppBar />
                    <Avatar sx={{  bgcolor: MYCOLOR.secondary , color: MYCOLOR.blacktext }}>N</Avatar>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ pb: 1 }}>
                <Toolbar />
                
            </Box>
        </Box>
    );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default DrawerAppBar;