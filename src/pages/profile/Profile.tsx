import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Box, Typography } from '@material-ui/core';
import "./Profile.css";


function Profile() {
  return (
    <>
      <Grid container className='flex cabecario'>
        <Grid alignItems='center' item xs={4}>
          <Box paddingX={4} className="flex" >
            <Box alignContent="center">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatarSize" />
              <Typography className='typography'>
                Nome do Usuário
              </Typography>
            </Box>
            <Grid alignItems='center' item xs={8}>
              <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" >
                  <Typography className='typography'>
                    Gotas
                  </Typography>
                  <Typography className='typography'>
                    123
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" >
                  <Typography className='typography'>
                    Moedas
                  </Typography>
                  <Typography className='typography'>
                    123
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                <Typography className='typography'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eveniet tempora ad, assumenda quam, rem nemo beatae accusantium pariatur voluptate ab ex repellat vitae? Labore quos rerum voluptate quisquam sed.
                </Typography>
              </Box>
              <Typography className='typographyTitulo'>
                Postagens
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Profile;