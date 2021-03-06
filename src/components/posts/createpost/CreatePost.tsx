import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Theme';
import Postagem from '../../../models/Post';
import { busca, buscaId, post, put } from '../../../services/Service';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/tokens/userReducer';
import { useSelector } from 'react-redux';
import User from '../../../models/User';
import './CreatePost.css';

function CreatePost() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );
      const userId = useSelector<UserState, UserState["id"]>(
        (state) => state.id
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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            categoria: '',
            descricao: ''
        })
        
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        imagem: '',
        dataDePostagem: '',
        tema: null,
        usuario: null
    })
    const [user, setUser] = useState<User>({
        id: +userId,   
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagem/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario:user
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagem`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Sua postagem foi atualizada com sucesso.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress:undefined,
            });
        } else {
            post(`/postagem`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Sua postagem foi cadastrada com sucesso!', {
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
        back()
       
    }

        function back(){

            history.push('/feed')
    
        }
        

    return (
        <Container maxWidth="sm" className="top">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Faça uma postagem!</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" placeholder="Insira um título para o seu post." variant="outlined" name="titulo" margin="normal" required fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto"  placeholder="Insira um texto de até 1000 caracteres." name="texto" variant="outlined" margin="normal" required fullWidth />
                <TextField value={postagem.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="imagem" label="Imagem" placeholder="Ilustre seu post com uma imagem. (Opcional)" name="imagem" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label" required>Tema</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.categoria}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a sua postagem.</FormHelperText>
                    <Button type="submit" variant="contained" className='postBtn'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CreatePost;