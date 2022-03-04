import React from 'react'
import GitHub from '@material-ui/icons/GitHub';
import Mail from '@material-ui/icons/Mail';
import {Box, Grid, Typography} from '@material-ui/core';
import './Footer.css'

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="footerBg">
        <Grid alignItems="center" item xs={12}>
          <Box className="box">
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h6" align="center" gutterBottom className='redes'>Siga o projeto e entre em contato com a gente!</Typography>
            </Box>
            
            <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/projetoFonte" target="_blank" rel="noreferrer">
                     <GitHub style={{ fontSize: 30, color: "white" }}/>
                </a>

                <a href = "mailto:projectfonte@gmail.com" target="_blank" rel="noreferrer" className='m'>
                    <Mail style={{ fontSize: 30, color: "white" }}/>
                </a>              
            </Box>
          </Box>
          
          <Box className='box1'>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="subtitle2" align="center" gutterBottom className='redes'>© 2022 Copyright</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a target="_blank" href="https://brasil.generation.org" rel="noreferrer" className="text-decorator-none">
                <Typography variant="subtitle2" gutterBottom className='redes bold' align="center">Generation Brasil</Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;