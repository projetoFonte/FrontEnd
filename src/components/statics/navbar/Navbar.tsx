import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';   
import './Navbar.css'
import { endianness } from 'os';
import { EndOfLineState } from 'typescript';
import { textAlign } from '@mui/system';
function Navbar() {
    return (
        <>
            <AppBar position="static">
            <Box style={{ backgroundColor: "lightblue" }}>
                <Toolbar variant="dense">
                    <Box mx={2}  className= "cursor" >
                        <Typography variant="h5" color='textPrimary'>
                            Fonte
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent='textPrimary'>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" color="textPrimary">
                                Sobre nós
                            </Typography>
                        </Box>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" color="textPrimary">
                                Home
                            </Typography>
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