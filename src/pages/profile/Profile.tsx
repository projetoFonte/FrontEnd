import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Box, Typography } from '@material-ui/core';
import "./Profile.css";

function Profile() {
  return(

    <Grid container direction="row" className='profileBg'>

      <Box display="flex" flexDirection="row">
        <Box className='p'>
          <Avatar src="/broken-image.jpg"  alt="" className='avatar' />     
        </Box>
      
        <Grid container className='p'>
          <Grid item xs={6}>
            <Typography variant='h6' gutterBottom component='h6' className='pfTitle'>Nome do Usuário</Typography>

            <Typography display="inline" className='pfText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga numquam expedita laboriosam eveniet ad pariatur? Soluta hic ipsa eius expedita ullam, sint rem iste, earum placeat molestiae odit.
            </Typography>

          <Box display="flex" flexDirection="row">
            <Box flexDirection="column" className='p'>
              <Box className='pfTitle'>
                Gotas
              </Box>
              <Box className='pfText'>
                000
              </Box>
            </Box>

          <Box flexDirection="column" className='p'>
            <Box className='pfTitle'>
                Moedas
              </Box>
              <Box className='pfText'>
                000
              </Box>
            </Box>
          </Box>

          </Grid>

        </Grid>
      </Box>
    </Grid>
    )
}

export default Profile;