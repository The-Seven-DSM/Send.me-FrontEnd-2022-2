import React, { useState, useEffect } from "react";

import { Header } from "../../components";

import Voltar from "../../assets/img/voltar.png";
import ArrowRight from "../../assets/img/arrow-right.png";
import ArrowLeft from "../../assets/img/arrow-left.png";
import month from "../../utils/months";
import DownloadButton from "../../assets/img/Download.png";

import {
  getAssociate,
  getAssociateEmail,
  validateEmail,
  sendEmail,
} from "../../services/requests";

import "./style.css";

export default function Editor() {
  const [values, setValues] = useState('');
  const [User, setUser] = useState([]);
  const [texto, setTexto] = useState("");
  const [pagina, setPagina] = useState(0);
  const [paginaSrc, setPaginaSrc] = useState("");
  function handleChange(value) {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  }
  let id_Email = window.location.href
    .split("=")[1]
    .split('&nome')[0]
  const data = new Date();
  const dia = data.getDate();
  const mes = month[data.getMonth()];
  const ano = data.getFullYear();
  useEffect(() => {
    getAssociate(window.location.href.split("=")[3]).then((response) => {
      setUser(response);
    });
    getAssociateEmail(
      window.location.href
        .split("=")[1]
        .split('&nome')[0]
    ).then((response) => {
      setPaginaSrc(response.pagina);
      setPagina(response.pagina.split('_')[1].split('.')[0].replace('0', '').replace('0', '').replace('0', ''));
      setTexto(response.corpo);
    });
  }, []);

  function formatar(n) {
    if (n.length === 4) {
      return n;
    } else if (n.length === 3) {
      return "0" + n;
    } else if (n.length === 2) {
      return "00" + n;
    } else if (n.length === 1) {
      return "000" + n;
    }
  }

  var paginaSub = (numero) => {
    console.log(numero)
    if (numero !== 1) {
      numero = parseInt(numero) - 1;
      var link =
        paginaSrc.substring(0, paginaSrc.lastIndexOf("_") + 1) +
        formatar(numero.toString()) +
        ".pdf";
      setPaginaSrc(link);
      setPagina(Number(numero));

    }
  };


  var paginaSom = (numero) => {
    console.log(numero)
    numero = parseInt(numero) + 1;
    var link =
      paginaSrc.substring(0, paginaSrc.lastIndexOf("_") + 1) +
      formatar(numero.toString()) +
      ".pdf";
    setPaginaSrc(link);
    setPagina(Number(numero));

  };
  console.log(pagina);
  function gerarpdf() {
    const { jsPDF } = require("jspdf");
    const doc = new jsPDF({
      unit: "in",
      format: [16, 12]
    });
    var novotexto = ""

    // if (typeof(values.emailCrpo) == undefined){
    //     texto = texto
    // }else  {
    //     texto = values.emailCrpo
    // }
    for (let i = 0; i < texto.length; i++) {
      if (i % 50 == 0 && i != 0) {
        novotexto += texto[i] + "\n";
      } else {
        novotexto += texto[i];
      }
    }
    doc.text(`Registro retirado do Diário Oficial - Cidade\nDia ${dia} de ${mes} de ${ano}\n${User.nome} \n \n${novotexto}`, 1, 1);
    doc.save("Registo do Diário Oficial - SendMe.pdf");
  }
  return (
    <>
      <Header />
      <div className="back-button-edit">
        <a href="/home">
          <img src={Voltar} alt="Voltar" />
        </a>
        <h3>{User.nome}</h3>
      </div>
      <div className="edit">
        <div>
          <iframe
            title="pdf"
            className="pdf"
            src={paginaSrc}
            width="100%"
            height="500px"
          />

          <div className="arrow-page">
            <button className="arrow-button" onClick={() => paginaSub(pagina)}>
              <img className="ArrowImg" src={ArrowLeft} alt="Seta Direita" />
            </button>
            <p> Página:{pagina}</p>
            <button className="arrow-button" onClick={() => paginaSom(pagina)}>
              <img className="ArrowImg" src={ArrowRight} alt="Seta Esquerda" />
            </button>
          </div>
        </div>
        <textarea
          defaultValue={texto}
          type="text"
          onChange={handleChange}
          rows="5"
          cols="30"
          className="email-body"
          name="emailCrpo"
        />
      </div>
      <div className="button-edit">
        <a href="/home">
          <button
            onClick={() =>
              validateEmail(id_Email, texto, values.emailCrpo)
            }
            className="validate-button"
          >
            VALIDAR EMAIL
          </button>
        </a>
        <a href="/home">
          <button
            onClick={() =>
              sendEmail(
                id_Email,
                texto,
                values.emailCrpo,
                User.id_associado,
                User.nome,
                User.email
              )
            }
            className="send-button"
          >
            ENVIAR EMAIL
          </button>
        </a>
        <button onClick={() =>gerarpdf()} className="create-pdf">GERAR PDF<img className="Download" src={DownloadButton} alt="Botão Download"/></button>
      </div>
    </>
  );
}
