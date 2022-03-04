import React from 'react';
import {Grid, Box, Typography, Button} from '@material-ui/core';
import './Home.css';

function Home(){
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className="homeBg">
          <Grid alignItems="center" item xs={6}>
                <Box paddingX={20}>
                    <Typography variant="h3" gutterBottom component="h3" align="center" className='text'>Bem-vinde!</Typography>
                    <Typography variant="h5" gutterBottom component="h5" align="center" className='text'>expresse aqui seus pensamentos e opiniões.</Typography>
                </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}></Box>
              <Box>
                <Button variant="outlined" className='homeBtn'>Criar post</Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} className='imgBg'></Grid>

        </Grid>
        </>
    )
}

export default Home;