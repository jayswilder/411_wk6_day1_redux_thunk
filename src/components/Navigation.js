import React, { useState } from 'react'
import cookie from 'cookie'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core'
import BusinessIcon from '@material-ui/icons/Business'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie);
        console.log(cookies['loggedIn']);
        return cookies['loggedIn'] ? true : false;
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <BusinessIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Local Business Listings
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="nav-list-item">
                        <Link to="/dashboard">Dasboard</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation