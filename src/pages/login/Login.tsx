import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToken, addId } from '../../store/tokens/actions';
import './Login.css';

function Login(){

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            token: '',
            foto: ''
        }
    )

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        token: '',
        foto: ''
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

        useEffect(() => {
            if (respUserLogin.token !== '') {
                console.log("Token: " + respUserLogin.token)
                console.log("ID: " + respUserLogin.id)

                 dispatch(addToken(respUserLogin.token)) 
                 dispatch(addId(respUserLogin.id.toString()))   
                history.push('/home')
            }
        }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress:undefined,
            });

        } catch (error) {
            toast.error('Seus dados parecem inconsistentes, tente novamente.', {
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
    }

    return(
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" xs={6}>            
            <Box paddingX={20}>

                <form onSubmit={onSubmit}>
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"
                     className='title'>
                        Entrar
                    </Typography>

                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                     id="usuario" label="Endereço de e-mail" placeholder="Insira o e-mail cadastrado." variant="outlined"
                     name="usuario" margin="normal" required fullWidth /> 
                     
                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                     id="senha" label="Senha" placeholder="Insira a senha cadastrada." variant="outlined" name="senha"
                     margin="normal" type="password" required fullWidth />

                    <Box marginTop={2} textAlign="center">
                        <Button type="submit" variant="contained" className='loginBtn'>
                            Entrar
                        </Button>
                    </Box>
                </form>

                <Box display='flex' justifyContent="center" marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align="center">
                            Não tem uma conta?
                        </Typography>
                    </Box>
                    <Link to="/cadastro" className='text-decorator-none'>
                        <Typography variant='subtitle1' className='register' gutterBottom align='center'>
                            Cadastre-se.
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Grid>
        <Grid xs={6} className='loginBg'></Grid>
    </Grid>
);
}

export default Login;