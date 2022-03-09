import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import './About.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";


function About() {
    
    let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
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
          progress:undefined,
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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt laboriosam minus similique a, laborum dolorum nisi natus delectus tenetur accusantium quod eaque illo, aperiam error numquam nulla soluta debitis. Dolor.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aut eaque nobis omnis fugiat veniam autem placeat officia magnam ex consequuntur maxime, totam perferendis dignissimos ipsum animi qui consequatur accusamus.
                            Et dolore eius quis aperiam corporis eos excepturi tempore molestias necessitatibus dolor animi beatae aliquid voluptates magnam nostrum tenetur maxime sint provident totam ab, magni officia at voluptas sit. Ipsam.
                        </Typography>
                        <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center">
                            <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" >
                                Sobre Nós
                            </Typography>
                            <Typography variant="body1" gutterBottom color="textPrimary" component="body" align="justify" >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt laboriosam minus similique a, laborum dolorum nisi natus delectus tenetur accusantium quod eaque illo, aperiam error numquam nulla soluta debitis. Dolor.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus beatae tempore, maxime officiis facilis nesciunt est id quasi hic voluptas molestiae autem quaerat, modi nihil facere omnis iste temporibus accusantium.
                                Enim iusto suscipit itaque consectetur minima impedit temporibus. Ducimus culpa amet omnis placeat accusamus incidunt aliquam optio distinctio quos sed quisquam nam illo iusto doloremque dicta voluptas est, natus enim?
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default About;