import React from 'react';
import { Box, Button, Fab, Grid } from '@material-ui/core';
import Profile from '../profile/Profile';
import PostList from '../../components/posts/postlist/PostList';
import ThemeList from '../../components/theme/themelist/ThemeList';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import './Feed.css';

function Feed()
{
    return(
        <Grid container direction='row' justifyContent="space-between" alignContent="flex-start">
            <Grid item lg={3}>
                < Profile />
            </Grid>

            <Grid item lg={6} justifyContent='center' >
            <Box marginTop={3} textAlign="center">
              <Link to="/formulariopostagem" className='text-decorator-none'>
                <Button type="submit" variant="contained" className='loginBtn'>
                  Criar post
                </Button>
              </Link>
            </Box>
                < PostList />
            </Grid>

            <Grid item lg={3} >
                < ThemeList />
              <Box marginTop={3} textAlign="center">
                <Link to="/formulariotema" className='text-decorator-none'>
                  <Fab aria-label="add">
                    <AddIcon />
                  </Fab>
                </Link>
              </Box>
            </Grid>
        </Grid>
    )
}

export default Feed;
