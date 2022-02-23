import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem  } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Navbar.css'

function Navbar() {
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static">
                <Box style={{ backgroundColor: "#A4EBF3" }}>
                    <Toolbar variant="dense" className='bar'>

                        <Box mx={2} className="cursor" >
                            <Typography variant="h5" className='nav-text'>
                                Fonte
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent='textPrimary'>

                            <Box mx={2} className='cursor'>
                                <Link to="/home" className='text-decorator-none'>
                                    <Typography variant="h6" className='nav-text'>
                                        Home
                                    </Typography>
                                </Link>
                            </Box>

                            <Box mx={2} className='cursor '>
                                <Link to="/about" className='text-decorator-none'>
                                    <Typography variant="h6" className='nav-text'>
                                        Sobre nós
                                    </Typography>
                                </Link>
                            </Box>

                        </Box>

                        {auth && (
                            <Box>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true" onClick={handleMenu}
                                    color="inherit">
                                    <AccountCircleIcon style={{ fontSize: 40 }} />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted
                                    transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                                    open={open} onClose={handleClose}>
                                    <Link to="/login" className="text-decorator-none">
                                        <MenuItem onClick={handleClose} style={{ color: '#000000' }}>Logout</MenuItem>
                                    </Link>
                                    <Link to="/profile" className="text-decorator-none">
                                        <MenuItem onClick={handleClose} style={{ color: '#000000' }}>Perfil</MenuItem>
                                    </Link>
                                </Menu>
                            </Box>
                        )}
                        
                    </Toolbar>
                </Box>
            </AppBar>

        </>
    )
}

export default Navbar;