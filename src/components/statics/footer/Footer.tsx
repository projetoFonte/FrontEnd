import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Typography, Box, Grid } from '@material-ui/core';
import StorageIcon from '@mui/icons-material/Storage';
import EmailIcon from '@mui/icons-material/Email';

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
                            <a href="https://github.com/projetoFonte" target="_blank">
                                <GitHubIcon style={{ fontSize: 60, color: "black" }} />
                            </a>
                            <a href=" https://projetofonte.herokuapp.com/" target="_blank">
                                <StorageIcon style={{ fontSize: 60, color: "black" }} />
                            </a>
                            <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank">
                                <EmailIcon style={{ fontSize: 60, color: "black" }} />
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