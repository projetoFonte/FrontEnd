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
                <Grid item xs={10} >

                    <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center">
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center">
                            Projeto Fonte
                        </Typography>
                        <Typography variant="body1" gutterBottom color="textPrimary" component="body" align="justify" >
                            Há uma crise hídrica hoje, fomentada pelo mau gerenciamento da água,
                            pelo desmatamento da nossa "vasta" floresta amazônica e também pelo fator aquecimento global, o que ocasiona a defazagem na distribuição equitativa da água,
                            e afeta a todos.
                            Em poucos anos seremos cada vez mais atingidos com mudanças climáticas e sua consequências.
                            Podemos reverter isso, visando os princípios universais do Pacto Global, nosso objetivo é captar organizações interessadas em impactar gerações futuras e fazer
                            a diferença, criando alertas para aumentar a visibilidade para essa questão.
                            A água é nossa fonte e ela não pode cessar.
                        </Typography>
                        <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center">
                            <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" >
                                Sobre Nós
                            </Typography>
                            <Typography variant="body1" gutterBottom color="textPrimary" component="body" align="justify" >

                               <img src="https://media-exp1.licdn.com/dms/image/D4E35AQETss4gTW6syg/profile-framedphoto-shrink_200_200/0/1637854227106?e=1646935200&v=beta&t=VL4cQuHwo5bbGtqsHVy71e7GhMw1wfNS6zyA8FCEyMI" alt="" />  <br></br>

                                Karen Gabrieli (Ela ou Elu)<br></br>
                                A Comunicadora<br></br>
                                A mais velha, Enérgica e com facilidade com Front-End e UX Design.<br></br><br></br>

                                <img src="" alt="" /><br></br>

                                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF6rlcg6vclZA/profile-displayphoto-shrink_200_200/0/1607049610692?e=1652313600&v=beta&t=n_l0rOxzYqma_Ryj_WW9caowNeTSSbw8yJHhX6cpATw" alt="" /> <br></br>

                                Natalia F Duque<br></br>
                                A Detalhista<br></br>
                                Da geração Z, Conciliadora e sempre querendo aprender.<br></br><br></br>

                                <img src="" alt="" /><br></br>

                                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFSoJZAXSWlvA/profile-displayphoto-shrink_200_200/0/1646845220008?e=1652313600&v=beta&t=33I_EccaM67c1HwFT59yelTSbbJVHc78KMuStbvOHcY" alt="" /> <br></br>

                                Gabriel Maia<br></br>
                                O observador<br></br>
                                O mais novo, determinado e disposto a resolver qualquer problema, facilidade com Back-end<br></br>

                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default About;