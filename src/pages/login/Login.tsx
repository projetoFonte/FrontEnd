import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login(){

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value

        })
    }

        useEffect(() => {
            if (token !== '') {
                history.push('/home')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            alert('Usuário logado com sucesso!')

        } catch (error) {
            alert('Seus dados parecem inconsistentes, tente novamente.');
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