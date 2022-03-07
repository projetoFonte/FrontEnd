import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletePost.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Post';
import { buscaId, deleteId } from '../../../services/Service';

function DeletePost() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
            alert("É necessário estar logado")
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
            history.push('/postagem')
            deleteId(`/postagem/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            alert('Sua postagem deletada com sucesso');
          }
        
          function nao() {
            history.push('/postagem')
          }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} color="secondary">
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