import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import './About.css';
import { useSelector } from "react-redux";
import { UserState } from '../../store/tokens/userReducer';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";


function About() {

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
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item md={10} xs={10} >

                    <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <Typography className='about' variant="h4" gutterBottom color="textPrimary" component="h4" align="center">
                                Projeto Fonte
                            </Typography>
                            <Typography className="texto1" variant="body1" gutterBottom color="textPrimary" component="body" align="justify" >
                                Há uma crise hídrica hoje, fomentada pelo mau gerenciamento da água,
                                pelo desmatamento da nossa "vasta" floresta amazônica e também pelo fator aquecimento global, o que ocasiona a defazagem na distribuição equitativa da água,
                                e afeta a todos.
                                Em poucos anos seremos cada vez mais atingidos com mudanças climáticas e sua consequências.
                                Visando os princípios universais do Pacto Global, nosso objetivo é captar organizações interessadas em impactar gerações futuras e fazer
                                a diferença, criando alertas para aumentar a visibilidade para essa questão.
                                A água é nossa fonte e ela não pode cessar.
                            </Typography>
                        </Box>
                        <Box flexDirection="column" display="flex" justifyContent="center" >
                            <Typography className="sobre" variant="h4" gutterBottom color="textPrimary" component="h4" align="center" >
                                Sobre Nós
                            </Typography>

                            <Box display="flex" justifyContent="space-between" alignItems="space-around">
                                <Grid item md={3} xs={10} >
                                    <Box>
                                        <Box display="flex" justifyContent="center" >
                                            <img src="https://media-exp1.licdn.com/dms/image/D4E35AQETss4gTW6syg/profile-framedphoto-shrink_200_200/0/1637854227106?e=1646935200&v=beta&t=VL4cQuHwo5bbGtqsHVy71e7GhMw1wfNS6zyA8FCEyMI" alt="" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio">
                                            Karen Gabrieli
                                        </Typography>
                                        <Typography className="subtituloBio" gutterBottom>
                                            A Comunicadora
                                        </Typography>
                                        <Typography className="textBio">
                                            A mais velha, tem a vida organizada no <i>Notion</i>, Enérgica e dona de uma mente criativa e gráfica.
                                        </Typography>

                                    </Box>
                                </Grid>

                                <Grid item md={3} xs={10} >
                                    <Box>
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF6rlcg6vclZA/profile-displayphoto-shrink_200_200/0/1607049610692?e=1652313600&v=beta&t=n_l0rOxzYqma_Ryj_WW9caowNeTSSbw8yJHhX6cpATw" alt="" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio">
                                            Natalia F Duque
                                        </Typography>
                                        <Typography className="subtituloBio" gutterBottom>
                                            A Detalhista
                                        </Typography>
                                        <Typography className="textBio" >
                                            Da geração Z, Conciliadora, atenta aos detalhes e sempre querendo aprender.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={3} xs={10} >
                                    <Box>
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFSoJZAXSWlvA/profile-displayphoto-shrink_200_200/0/1646845220008?e=1652313600&v=beta&t=33I_EccaM67c1HwFT59yelTSbbJVHc78KMuStbvOHcY" alt="" className="bio" />
                                        </Box>
                                        <Typography className="tituloBio">
                                            Gabriel Maia
                                        </Typography>
                                        <Typography className="subtituloBio" gutterBottom>
                                            O Observador
                                        </Typography>
                                        <Typography className="textBio" >
                                            O mais novo, determinado e disposto a resolver qualquer problema, facilidade com Back-end.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Grid item md={3} xs={10} >
                                    <Box>
                                        <Box display="flex" justifyContent="center">
                                            <img src=" https://media-exp1.licdn.com/dms/image/C4E03AQFV3duPNF8f3Q/profile-displayphoto-shrink_200_200/0/1645064988888?e=1652313600&v=beta&t=DR5M5tO4sKZvonaTyzNijVldIEjJoYgtwhh0divcFLo" alt="" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio">
                                            William Santos
                                        </Typography>
                                        <Typography className="subtituloBio" gutterBottom>
                                            O Professor
                                        </Typography>
                                        <Typography className="textBio" >
                                        Apaixonado por tecnologia, motivado por desafios e sempre disponível quando alguém precisa de ajuda.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={3} xs={10} >
                                    <Box>
                                        <Box display="flex" justifyContent="center">
                                            <img src="//media-exp1.licdn.com/dms/image/C4E03AQHjSV2sfqVRQw/profile-displayphoto-shrink_200_200/0/1644242914800?e=1652313600&v=beta&t=QZOwKktiJRxFoSkBOPQU_53-nE99R3TwR2QwPRYyJOY" alt="" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio" >
                                            Levi Magni
                                        </Typography>
                                        <Typography className="subtituloBio" gutterBottom>
                                            O Proativo
                                        </Typography>
                                        <Typography className="textBio" >
                                            Nascido um ano após o bug do milênio, naturalmente curioso, apaixonado por artes e tecnologia.
                                        </Typography>
                                    </Box>
                                </Grid> 

                                <Grid item md={3} xs={10} >
                                    <Box>
                                        <Box display="flex" justifyContent="center" >
                                            <img src="//media-exp1.licdn.com/dms/image/C4E03AQE4OR1c2rmNLw/profile-displayphoto-shrink_200_200/0/1641927713221?e=1652313600&v=beta&t=lQ1RI8K024jrcdFCHUV7O3l_uKt3Bk_dTnpdnU6azSc" alt="" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio" >
                                            Lucas Braga
                                        </Typography>
                                        <Typography className="subtituloBio" gutterBottom >
                                            O Agitado
                                        </Typography>
                                        <Typography className="textBio" >
                                        O amante de Peaky Blinders, sempre frio e calculista
                                        </Typography>
                                    </Box>
                                </Grid> 
                            </Box> 
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    );
}

export default About;
// grid (about) > box (bio de cada um ) > itens (conteudo)