import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import './About.css';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
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
            <Grid container direction="row" justifyContent="center" alignItems="center" className='bgSobre'>
                <Grid item md={10} xs={10} >

                       
                        <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center">
                            <Typography className="font sobre bold textColor" variant="h4" gutterBottom color="textPrimary" component="h4" align="center" >
                                SOBRE NÓS
                            </Typography>

                            <Box display="flex" justifyContent="space-around" alignItems="center">
                                <Grid item md={3} xs={10} >
                                    <Box className='mSobre' justifyContent='center'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center" >
                                             <img src="https://i.imgur.com/jBveTjX.jpg" alt="Foto de Karen" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio">
                                                Karen Gabrieli
                                        </Typography>
                                        <div id="show">
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <a href="https://www.linkedin.com/in/karen-gabrieli-viana/" target="_blank" rel="noreferrer">
                                                    <LinkedIn className='pIcon' style={{ fontSize: 30, color: "#8ccbbe" }}/>
                                                </a>
                                                <a href="https://github.com/karengabiviana" target="_blank" rel="noreferrer">
                                                    <GitHub className='pIcon' style={{ fontSize: 25, color: "#8ccbbe" }}/>
                                                </a>
                                            </Box>
                                        </div>
                                    </div>
                                        <Typography className="subtituloBio" gutterBottom>
                                            <i>A Comunicadora</i>
                                        </Typography>
                                        <Typography className="textBio">
                                        Com a vida organizada no <i>Notion</i>, enérgica e dona de uma mente criativa e gráfica. Apaixonada e curiosa por pessoas, culturas e idiomas.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={3} xs={10} >
                                    <Box className='mSobre'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://i.imgur.com/O5QnRke.png" alt="Foto da Natalia" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio">
                                            Natalia F Duque
                                        </Typography>
                                        <div id="show">
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <a href="https://www.linkedin.com/in/natalia-ferreira-duque/" target="_blank" rel="noreferrer">
                                                    <LinkedIn className='pIcon' style={{ fontSize: 30, color: "#8ccbbe" }}/>
                                                </a>
                                                <a href="https://github.com/naaduque" target="_blank" rel="noreferrer">
                                                    <GitHub className='pIcon' style={{ fontSize: 25, color: "#8ccbbe" }}/>
                                                </a>
                                            </Box>
                                        </div>
                                    </div>
                                        <Typography className="subtituloBio" gutterBottom>
                                            <i>A Detalhista</i>
                                        </Typography>
                                        <Typography className="textBio" >
                                            Conciliadora, ama animais, jogos e documentários. Sempre atenta aos detalhes e querendo aprender cada vez mais.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={3} xs={10} >
                                    <Box className='mSobre'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://i.imgur.com/PRG2drH.jpg" alt="Foto do Gabriel" className="bio" />
                                        </Box>
                                        <Typography className="tituloBio">
                                            Gabriel Maia
                                        </Typography>
                                        <div id="show">
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <a href="https://www.linkedin.com/in/gabriel-maia-21a725205/" target="_blank" rel="noreferrer">
                                                    <LinkedIn className='pIcon' style={{ fontSize: 30, color: "#8ccbbe" }}/>
                                                </a>
                                                <a href="https://github.com/ggabrielmaia" target="_blank" rel="noreferrer">
                                                    <GitHub className='pIcon' style={{ fontSize: 25, color: "#8ccbbe" }}/>
                                                </a>
                                            </Box>
                                        </div>
                                    </div>
                                        <Typography className="subtituloBio" gutterBottom>
                                            <i>O Observador</i>
                                        </Typography>
                                        <Typography className="textBio" >
                                            O mais novo, determinado e disposto a resolver qualquer problema, afinidade com Back-end.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Box>

                            <Box display="flex" justifyContent="space-around">
                                <Grid item md={3} xs={10} >
                                    <Box className='mSobre'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://i.imgur.com/GhtGqts.jpg" alt="Foto do William" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio">
                                            William Santos
                                        </Typography>
                                        <div id="show">
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <a href="https://www.linkedin.com/in/williamrsh/" target="_blank" rel="noreferrer">
                                                    <LinkedIn className='pIcon' style={{ fontSize: 30, color: "#8ccbbe" }}/>
                                                </a>
                                                <a href="https://github.com/Williamrsh" target="_blank" rel="noreferrer">
                                                    <GitHub className='pIcon' style={{ fontSize: 25, color: "#8ccbbe" }}/>
                                                </a>
                                            </Box>
                                        </div>
                                    </div>
                                        <Typography className="subtituloBio" gutterBottom>
                                            <i>O Professor</i>
                                        </Typography>
                                        <Typography className="textBio" >
                                            Apaixonado por tecnologia, motivado por desafios e sempre disponível quando alguém precisa de ajuda.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={3} xs={10} >
                                    <Box className='mSobre'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://i.imgur.com/ci9Fngb.jpg" alt="Foto do Levi" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio" >
                                            Levi Magni
                                        </Typography>
                                        <div id="show">
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <a href="https://www.linkedin.com/in/levmn/" target="_blank" rel="noreferrer">
                                                    <LinkedIn className='pIcon' style={{ fontSize: 30, color: "#8ccbbe" }}/>
                                                </a>
                                                <a href="https://github.com/levmn" target="_blank" rel="noreferrer">
                                                    <GitHub className='pIcon' style={{ fontSize: 25, color: "#8ccbbe" }}/>
                                                </a>
                                            </Box>
                                        </div>
                                    </div>
                                        <Typography className="subtituloBio" gutterBottom>
                                            <i>O Proativo</i>
                                        </Typography>
                                        <Typography className="textBio" >
                                            Nascido um ano após o bug do milênio, naturalmente curioso, apaixonado por artes e tecnologia, obstinado em unir essas áreas.
                                        </Typography>
                                    </Box>
                                </Grid> 

                                <Grid item md={3} xs={10} >
                                    <Box className='mSobre'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center" >
                                            <img src="https://i.imgur.com/J9p2Bbm.jpg" alt="Foto do Lucas" className="bio"/>
                                        </Box>
                                        <Typography className="tituloBio" >
                                            Lucas Braga
                                        </Typography>
                                        <div id="show">
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <a href="https://www.linkedin.com/in/lucas-braga-25b250205/" target="_blank" rel="noreferrer">
                                                    <LinkedIn className='pIcon' style={{ fontSize: 30, color: "#8ccbbe" }}/>
                                                </a>
                                                <a href="https://github.com/LucasBraga03" target="_blank" rel="noreferrer">
                                                    <GitHub className='pIcon' style={{ fontSize: 25, color: "#8ccbbe" }}/>
                                                </a>
                                            </Box>
                                        </div>
                                    </div>
                                        <Typography className="subtituloBio" gutterBottom >
                                            <i>O Agitado</i>
                                        </Typography>
                                        <Typography className="textBio" >
                                        O amante de <i>Peaky Blinders</i>, frio e calculista. Sempre tentando deixar o clima do grupo mais leve e disposto a ajudar.
                                        </Typography>
                                    </Box>
                                </Grid> 
                            </Box> 
                        </Box>
                </Grid>
            </Grid>

        </>
    );
}

export default About;
// grid (about) > box (bio de cada um ) > itens (conteudo)