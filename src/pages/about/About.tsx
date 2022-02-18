import React from "react";
import { Grid, Box, Typography,TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function About()
{
    return(
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid alignItems="center" xs={6}>
                    <Box paddingX={20}>
                        <Box display="flex" justifyContent="center">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color:"blue"}} >Fonte </Typography>
                            <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt laboriosam minus similique a, laborum dolorum nisi natus delectus tenetur accusantium quod eaque illo, aperiam error numquam nulla soluta debitis. Dolor.</Typography>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" >Sobre Nós </Typography>
                            <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt laboriosam minus similique a, laborum dolorum nisi natus delectus tenetur accusantium quod eaque illo, aperiam error numquam nulla soluta debitis. Dolor.</Typography>
                            <Box marginRight={1}>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default About;