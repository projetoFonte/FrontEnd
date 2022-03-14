import Theme from './Theme'
import User from "./User";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    imagem: String;
    dataDePostagem: string;
    tema?: Theme| null
    usuario: User | null 

}

export default Postagem;