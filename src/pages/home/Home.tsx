import React from 'react';
import {Grid, Box, Typography, Button} from '@material-ui/core';
import './Home.css';

function Home(){
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className="homeBg">
          <Grid alignItems="center" item xs={6}>
                <Box paddingX={20}>
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja Bem-vinde!</Typography>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}></Box>
              <Button variant="outlined" style={{ backgroundColor: "#75d4ec", color: "white",  borderRadius: 10, }}>Ver Postagens</Button>
            </Box>
          </Grid>
          <Grid item xs={6}>       
            <Box>
              <img src="https://imgur.com/21v7VjS.png" alt="" className='img'/>
            </Box>    
          </Grid>
          <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
        </Grid>
        </>
    )
}

export default Home;