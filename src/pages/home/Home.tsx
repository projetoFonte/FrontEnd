import React, { useEffect } from 'react';
import {Grid, Box, Typography, Button} from '@material-ui/core';
import PostTab from '../../components/posts/posttab/PostTab';
import ModalPost from '../../components/posts/modalpost/ModalPost';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserState } from '../../store/tokens/userReducer';
import { useSelector } from 'react-redux';
import './Home.css';

function Home(){

  let history = useHistory();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  
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
            <Box display="flex" justifyContent="center">
            <Grid item xs={12} className='imgBg'></Grid>
            </Box>
          </Grid>

          {/* <Box marginRight={30}>
              <ModalPost />  
          </Box> */}

          {/* <Box>
            <Button variant="outlined" className='homeBtn'>Criar post</Button>
          </Box> */}

          <Grid xs={12} className='postagens'>
            <PostTab />
          </Grid>

        </Grid>
        </>
    )
}

export default Home;