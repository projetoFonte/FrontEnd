import React, { useState, useEffect } from 'react';
import Postagem from '../../../models/Post';
import { Link } from 'react-router-dom';
import { busca, buscaId } from '../../../services/Service'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, Typography, CardHeader, Avatar, IconButton, CardMedia, makeStyles, Menu, MenuItem, Grid, CardActions } from '@material-ui/core';
import { UserState } from '../../../store/tokens/userReducer';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import blue from '@material-ui/core/colors/blue';
import User from '../../../models/User';
import './PostList.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
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

  const id = useSelector<UserState, UserState["id"]>(
    (state) => state.id
  );

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const [user, setUser] = useState<User>({
    id: +id,   
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })


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
        progress: undefined,
      });
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
              <Box m={2}  className='paddingPost'>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar src={ user.foto }  alt={ user.nome }>
                      </Avatar>
                    }
                    title={ user.nome }//{user.nome} buscar do cadastro usuário
                    subheader={post.dataDePostagem} // verificar como buscar do back
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

                  <CardActions disableSpacing>
                    <Link to={`/formulariopostagem/${post.id}`} className='text-decorator-none'>
                      <IconButton aria-label="add to favorites">
                        <EditIcon />
                      </IconButton>
                    </Link>
                  
                  <Link to={`/deletarpostagem/${post.id}`} className='text-decorator-none'>
                    <IconButton aria-label="share">
                      <DeleteIcon />
                    </IconButton>
                  </Link>

                  </CardActions>
                </Card>
              </Box>
          ))
        }
    </>
  )
}

export default PostList;