import Theme from './Theme'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    imagem: String,
    tema?: Theme| null

}

export default Postagem;