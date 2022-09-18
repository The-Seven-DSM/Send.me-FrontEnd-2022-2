import React, {useState ,useEffect} from 'react';
import Axios from "axios";
import Header from "../Header/header";
import Voltar from '../../assets/img/voltar.png'
const Editor = () => {
    const [values, setValues] = useState([]);
    const pega = (value) => {
        setValues(preValue => ({
            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }
    const [Email, setEmail] = useState([]);
    // const [use, setUser]
    const [texto,setTexto]=  useState('') 
    const pagina = Email.pagina
        
    var ida = "/get/email/"+window.location.href.split('=')[1].split('&nome')[0]
    let use = window.location.href.split('=')[2].split('%20').join(' ')
    console.log(use)
    const sendMail = () => {
        Axios.post(`http://localhost:3001/send`, {
            // name: listGames.map((item) => item.associado.nome),
            // email: listGames.map((item) => item.associado.email),
            corpo: values.corpo,
        }
        ).then(resp => {
            console.log(resp);
        });
    }
    useEffect(() => {
        Axios.get(`http://localhost:3001${ida}`).then((resp) => {
            setEmail(resp.data);
            setTexto(resp.data.corpo.toString())
       
        });
    }, [])
    console.log(values);
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/,
	};
	return (
        <>
        <Header />
        <div className="voltaremail" >
                    <a href="/"><img src={Voltar} alt="Voltar"/></a>
                    <h3>{use}</h3>
                </div>

        <div className="editor">
            <div className="pdf">
            <iframe src={pagina} width="100%" height="500px"/>
            </div>
            
            <textarea  defaultValue={texto} type='text' onChange={pega} rows="5" cols="30" className="email-body" name="emailCrpo">
            </textarea>
        </div>
        <div className="email-botao">
                <button onClick={() => sendMail()} className="validar-email">VALIDAR EMAIL </button>
                <button className="enviar-email">ENVIAR EMAIL</button>
            </div>
        </>
        );
}
export default Editor