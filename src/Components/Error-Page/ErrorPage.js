import React, {Component} from "react";
import { Link } from "react-router-dom";


class Error extends Component {
    render(){
        return (
            <div>
                <h1>Deu erro na Pagina, você não está logado</h1>
                <Link to='/' className='btn'>
                    Voltar
                </Link>
            </div>
        )
    }

};

export default Error