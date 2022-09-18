import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Header from "../Header/header";
import Voltar from '../../assets/img/voltar.png'
const Editor = () => {
    const [values, setValues] = useState([]);
    var pega = (value) => {
        setValues(preValue => ({
            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }
    const [Email, setEmail] = useState([]);
    const [texto, setTexto] = useState('')
    const pagina = Email.pagina

    var ida = "/get/email/" + window.location.href.split('=')[1].split('&nome')[0]
    let use = window.location.href.split('=')[2].split('%20').join(' ')
    console.log(use)
    const validar = () => {
        Axios.post(`http://localhost:3001/validar`, {
            id_email: Email.id_email,
            corpo: values.emailCrpo,
        }
        ).then(resp => {
            console.log(resp);
        });
    }
    const sendMail = () => {
        Axios.post(`http://localhost:3001/send/direto`, {
            id_email: Email.id_email,
            corpo: values.emailCrpo,
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
                <a href="/"><img src={Voltar} alt="Voltar" /></a>
                <h3>{use}</h3>
            </div>
            <div className="editor">
                <div className="pdf">
                    <iframe src={pagina} width="100%" height="500px" />
                </div>

                <textarea defaultValue={texto} type='text' onChange={pega} rows="5" cols="30" className="email-body" name="emailCrpo">
                </textarea>
            </div>
            <div className="email-botao">
            <a href="/"><button onClick={() => validar()} className="validar-email">VALIDAR EMAIL</button></a>
            <a href="/">  <button onClick={() => sendMail()} className="enviar-email">ENVIAR EMAIL</button></a>
            </div>
        </>
    );
}
export default Editor