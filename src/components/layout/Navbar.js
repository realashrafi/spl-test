import React from 'react';
import {Link} from "react-router-dom";
import {routeObject} from "../Routes/routeObject";
import {Box, Button, Drawer} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuSimple from "../assets/port/UserMenu";

const Navbar = () => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={'flex flex-col items-center justify-between'}>
                {/*<Link to="/">login</Link>*/}
                {routeObject.map((route, index) => (
                    <Button size="large">
                        <Link to={route.path} className={'flex items-center justify-around'} key={route.id} dir={'rtl'}>
                            <span className={'mx-5'}>{route.path}</span>
                            <span className={'mx-5'}>{route.icon}</span>
                        </Link>
                    </Button>
                ))}
            </div>
        </Box>
    );
    return (
        <div className="flex px-4 w-full items-center border-b h-[4rem] fixed bg-[#EEEFEE] z-50">
            <MenuSimple/>
            {['right'].map((anchor) => (
                <div className={'fixed right-0 top-3'} key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </div>
            ))}
        </div>
    );
};

export default Navbar;