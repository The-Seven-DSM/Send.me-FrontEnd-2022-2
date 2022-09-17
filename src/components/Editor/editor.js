import React, {useState ,useEffect} from 'react';
import Axios from "axios";
import Header from "../Header/header";
import Voltar from '../../assets/img/voltar.png'
const Editor = () => {
    const [Email, setEmail] = useState([]);

    const texto =  Email.corpo
    const pagina = Email.pagina
    
    var ida = "/get/email/"+window.location.href.split('=')[1]
    let use = window.location.href.split('=')[2].split('%20').join(' ')
    useEffect(() => {
        Axios.get(`http://localhost:3001${ida}`).then((resp) => {
            setEmail(resp.data);
        });
    }, [])

	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/,
	};
	return (
        <>
        <Header />
        <div className="voltaremail" >
                    <a href="/"><img src={Voltar} alt="Voltar"/></a>
                    <h3>{use.toLocaleString()}</h3>
                </div>

        <div className="editor">
            <div className="pdf">
            <iframe src={pagina} width="100%" height="500px"/>
            </div>
            <textarea value={texto} className="email-body" name="email-body"placeholder="Digite aqui o conteúdo do Email">

            </textarea>
        </div>
        <div className="email-botao">
                <button className="validar-email">VALIDAR EMAIL </button>
                <button className="enviar-email">ENVIAR EMAIL</button>
            </div>
        </>
        );
}

export default Editor