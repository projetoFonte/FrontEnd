import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Postagem from '../../../models/Post';
import { busca } from '../../../services/Service'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, Typography, CardHeader, Avatar, IconButton, CardMedia, makeStyles, Menu, MenuItem } from '@material-ui/core';
import { TokenState } from '../../../store/tokens/tokensReducer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import blue from '@material-ui/core/colors/blue';
import './PostList.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

function PostList() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

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

  async function getPost() {
    await busca("/postagem", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} className='bgList'>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Água" className={classes.avatar}>
                  </Avatar>
                }
                action={//três pontos
                  <IconButton aria-label="settings" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                    <MoreVertIcon />
                    <Menu id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}>

                      <Link to={`/formulariopostagem/${post.id}`} >
                        <MenuItem onClick={handleClose}>
                          Atualizar
                        </MenuItem>
                      </Link>

                      <Link to={`/deletarpostagem/${post.id}`} >
                        <MenuItem onClick={handleClose}>
                          Deletar
                        </MenuItem>
                      </Link>
                  </Menu>
                  </IconButton>
                  
                }
            title="Nome da Pessoa Usuária" //buscar do cadastro usuário
            subheader="08 de Março de 2022" // verificar como buscar do back
              />

            <CardMedia
              className={classes.media}
              image={(post.imagem).toString()}
              title="Imagem da Postagem"
            />

            <CardContent>
              <Typography variant="h5" component="h2">
                {post.titulo}
              </Typography>
              <Typography paragraph>
                {post.tema?.categoria}
              </Typography>
              <Typography paragraph>
                {post.texto}
              </Typography>
            </CardContent>
          </Card>
          </Box>
  ))
}
    </>
  )
}

export default PostList;