import Theme from './Theme'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    imagem: String;
    dataDePostagem: string;
    tema?: Theme| null

}

export default Postagem;