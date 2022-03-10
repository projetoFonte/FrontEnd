import React from 'react';
import { Grid } from '@material-ui/core';
import Profile from '../profile/Profile';
import PostList from '../../components/posts/postlist/PostList';
import ThemeList from '../../components/theme/themelist/ThemeList';

function Feed()
{
    return(
        <Grid container direction='row' justifyContent="space-between" alignContent="flex-start">
            <Grid item lg={3} >
                < Profile/>
            </Grid>

            <Grid item lg={6} justifyContent="center" >
                < PostList />
            </Grid>

            <Grid item lg={3} >
                < ThemeList />
            </Grid>
        </Grid>
    )
}

export default Feed;

{/* 
          <Grid container row>
            <Grid item xs={ 3 } />
              <Profile />
            <Grid item xs={ 6 } />
              <ListaPost />
            <Grid item xs={ 3 } />
              <ListaTema />

              Alguns Temas
              <Box> 3 tmas </Box>
          </Grid>
        
        */}
