import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserState } from '../../store/tokens/userReducer';
import User from '../../models/User';
import { buscaId } from '../../services/Service';
import "./Profile.css";

function Profile() {

  let history = useHistory()

  const id = useSelector<UserState, UserState["id"]>(
    (state) => state.id
  );

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )

  const [user, setUser] = useState<User>({
    id: +id,   
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      history.push("/login")
    }
  }, [token])

  async function findById(id: string) {
    buscaId(`/usuarios/id/${id}`, setUser, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  return(

    <Grid container direction="row" justifyContent='center' className='profileBg'>

      <Box display="flex" flexDirection="row">
        <Box className='p'>
          <Avatar src={ user.foto }  alt={ user.nome } className='avatar' />
          <Typography variant='h6' gutterBottom component='h6' className='pfNome'>{ user.nome }</Typography> 

          <Box display="flex" justifyContent='center' flexDirection="row">
              <Box flexDirection="column" className='p'>
                <Box className='pfTitle'>
                  Gotas
                </Box>
                <Box className='pfText'>
                  000
                </Box>
              </Box>

            <Box flexDirection="column" justifyContent='center' className='p'>
                <Box className='pfTitle'>
                  Moedas
                </Box>
                <Box className='pfText'>
                  000
                </Box>
              </Box>
            </Box>
        </Box>
      </Box>
    </Grid>
    )
}

export default Profile;