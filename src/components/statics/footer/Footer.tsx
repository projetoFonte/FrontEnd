import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@material-ui/icons/Web';
import EmailIcon from '@mui/icons-material/Email';
import {Typography, Box, Grid } from '@material-ui/core';


function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "lightblue", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "black" }}>Siga-nos nas redes sociais e contate-nos! </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href=" https://projetofonte.herokuapp.com/" target="_blank" rel="noreferrer" >
                                <WebIcon style={{ fontSize: 50, color: "black" }} />
                            </a>
                            <a href="https://github.com/projetoFonte" target="_blank" rel="noreferrer" >
                                <GitHubIcon style={{ fontSize: 50, color: "black" }} />
                            </a>
                            <a href = "mailto:projectfonte@gmail.com" target="_blank" rel="noreferrer" >
                                <EmailIcon style={{ fontSize: 50, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "lightblue", height: "40px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;