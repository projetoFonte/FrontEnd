import React from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, FormControl, FormHelperText } from "@material-ui/core"
// import Tema from '../../../models/Tema';
// import Postagem from '../../../models/Postagem';
// import { busca, buscaId, post, put } from '../../../services/Service';
import './CreatePost.css';

function CreatePost() {
 
    return (
        <Container maxWidth="sm" className="top">
            <form >
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Faça uma postagem!</Typography>
                <TextField id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper">
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem.</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CreatePost;