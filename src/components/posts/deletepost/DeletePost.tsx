import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import Postagem from '../../../models/Post';
import { buscaId, deleteId } from '../../../services/Service';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/tokens/userReducer';
import { useSelector } from 'react-redux';
import './DeletePost.css';

function DeletePost() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    );
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
            toast.error('É necessário estar logado.', {
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

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagem/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history.push('/home')
            deleteId(`/postagem/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Sua postagem foi deletada com sucesso.', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress:undefined,
          });

          }
        
          function nao() {
            history.push('/home')
          }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a postagem?
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} className='simBtn'>
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} className='naoBtn'>
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletePost;