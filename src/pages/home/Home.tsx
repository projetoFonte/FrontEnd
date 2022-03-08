import React, { useEffect } from 'react';
import {Grid, Box, Typography, Button} from '@material-ui/core';
import PostTab from '../../components/posts/posttab/PostTab';
import ModalPost from '../../components/posts/modalpost/ModalPost';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Home.css';
import { toast } from 'react-toastify';

function Home(){

  let history = useHistory();
  const [token, setToken] = useLocalStorage('token');
  
  useEffect(() => {
    if (token == "") {
        toast.error('Você precisa estar logado', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress:undefined,
      });
        history.push("/login")

    }
}, [token])

    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className="homeBg">
          <Grid alignItems="center" item xs={6}>
                <Box paddingX={20}>
                    <Typography variant="h3" gutterBottom component="h3" align="center" className='text'>Bem-vinde!</Typography>
                    <Typography variant="h5" gutterBottom component="h5" align="center" className='text'>expresse aqui seus pensamentos e opiniões.</Typography>
                </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
                <ModalPost />  
              </Box>

              {/* <Box>
                <Button variant="outlined" className='homeBtn'>Criar post</Button>
              </Box> */}
              
            </Box>
          </Grid>

          <Grid item xs={6} className='imgBg'></Grid>

          <Grid xs={12} className='postagens'>
            <PostTab />
          </Grid>

        </Grid>
        </>
    )
}

export default Home;