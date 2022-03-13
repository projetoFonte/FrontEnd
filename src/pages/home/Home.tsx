import React, { useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import PostTab from '../../components/posts/posttab/PostTab';
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
          <Grid xs={12} className='postagens'>
            <PostTab />
          </Grid>
        </Grid>
        </>
    )
}

export default Home;