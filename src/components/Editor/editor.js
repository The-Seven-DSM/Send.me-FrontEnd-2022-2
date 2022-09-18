import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Header from "../Header/header";
import Voltar from '../../assets/img/voltar.png';
import ArrowRight from "../../assets/img/arrow-right.png";
import ArrowLeft from "../../assets/img/arrow-left.png";

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
    const [pagina, setPagina] = useState(0);
    const [paginaSrc, setPaginaSrc] = useState('')
    console.log(pagina)
    
    var ida = "/get/email/" + window.location.href.split('=')[1].split('&nome')[0]
    let use = window.location.href.split('=')[2].split('%20').join(' ')
    const validar = () => {
        alert("O email foi validado!");
        Axios.post(`http://localhost:3001/validar`, {
            id_email: Email.id_email,
            corpo: values.emailCrpo,
        }
        ).then(resp => {
            console.log(resp);
        });
    }
    const sendMail = () => {
        alert("O email foi em enviado!");
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
            setPaginaSrc(resp.data.pagina);
            var paginaEx = resp.data.pagina;
            setPagina(paginaEx.split('_')[1].split('.')[0]);
            setTexto(resp.data.corpo.toString());
        });
    }, [])

    function formatar(n) {
        if (n.length === 4) {
            return n
        } else if (n.length === 3) {
            return "0" + n
        } else if (n.length === 2) {
            return "00" + n
        } else if (n.length === 1) {
            return "000" + n
        }
        
    }
    // console.log(var link.substring(var link.lastIndexOf('pg_') + 3, var link.lastIndexOf('.pdf')));
    // const paginaNum = pagina.substring(pagina.lastIndexOf("pg_") + 3, pagina.lastIndexOf(".pdf"))
   

    var paginaSub = (numero) => {
        if (numero !== 1){
            numero = parseInt(numero) - 1
            var link = paginaSrc.substring(0,paginaSrc.lastIndexOf("_") + 1) + formatar(numero.toString()) + ".pdf"
            setPaginaSrc(link);
            setPagina(Number(numero))
        }

    }

    var paginaSom = (numero) => {
        numero = parseInt(numero) + 1
        var link = paginaSrc.substring(0,paginaSrc.lastIndexOf("_") + 1) + formatar(numero.toString()) + ".pdf"
        setPaginaSrc(link);
        setPagina(Number(numero))
    }

    return (
        <>
            <Header />
            <div className="back-button-edit" >
                <a href="/"><img src={Voltar} alt="Voltar" /></a>
                <h3>{use}</h3>
            </div>
            <div className="edit">
                <div>
                    <iframe className="pdf" src={paginaSrc} width="100%" height="500px" />
                                    
                    <div className="arrow-page">
                        <button className="arrow-button" onClick={() => paginaSub(pagina)}><img className="ArrowImg" src={ArrowLeft} alt="Seta Direita" /></button>
                        <p > Pagina:{pagina}</p>
                        <button className="arrow-button" onClick={() => paginaSom(pagina)}><img className="ArrowImg" src={ArrowRight} alt="Seta Esquerda" /></button>
                    </div>
                </div>
                <textarea defaultValue={texto} type='text' onChange={pega} rows="5" cols="30" className="email-body" name="emailCrpo">
                </textarea>
            </div>
            <div className="button-edit">
                <a href="/"><button onClick={() => validar()} className="validate-button">VALIDAR EMAIL</button></a>
                <a href="/"><button onClick={() => sendMail()} className="send-button">ENVIAR EMAIL</button></a>
            </div>
        </>
    );
}
export default Editor