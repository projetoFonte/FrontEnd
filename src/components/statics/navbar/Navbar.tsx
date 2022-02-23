import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Box style={{ backgroundColor: "lightblue" }}>
                    <Toolbar variant="dense">

                        <Box mx={2} className="cursor" >
                            <Typography variant="h5" color='textPrimary'>
                                Fonte
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent='textPrimary'>
                            <Box mx={2} className='cursor '>
                                <Link to="/about" className='text-decorator-none'>
                                    <Typography variant="h6" color="textPrimary">
                                        Sobre nós
                                    </Typography>
                                </Link>
                            </Box>

                            <Box mx={2} className='cursor'>
                                <Link to="/home" className='text-decorator-none'>
                                    <Typography variant="h6" color="textPrimary">
                                        Home
                                    </Typography>
                                </Link>
                            </Box>

                            <Box mx={2} className='cursor'>
                                <Link to="/profile" className='text-decorator-none'>
                                    <Typography variant="h6" color="textPrimary">
                                        Perfil
                                    </Typography>
                                </Link>
                            </Box>

                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={2} className='cursor'>
                                    <Typography variant="h6" color="textPrimary">
                                        Logout
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                        
                    </Toolbar>
                </Box>
            </AppBar>

        </>
    )
}

export default Navbar;