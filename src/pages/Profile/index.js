import React, { useState, useEffect } from "react";

import { Header, EmailList } from "../../components";

import Voltar from "../../assets/img/voltar.png";
import Lixeira from "../../assets/img/lixeira.png";
import Caneta from "../../assets/img/caneta.png";
import "./style.css";

import {getAssociate, getAssociateEmails, deleteAssociate } from "../../services/requests";

export default function Perfil() {
  const [associate, setAssociate] = useState([]);
  const [Emails, setEmails] = useState([]);

  useEffect(() => {
    getAssociate(window.location.href.split("=")[1]).then((response) =>
      setAssociate(response)
    );
  }, []);
  useEffect(() => {
    getAssociateEmails(window.location.href.split("=")[1]).then((response) =>
      setEmails (response)
    );
  }, []);
  return (
    <>
      <Header />

      <div className="background">
        <div className="back-button-registration">
          <a href="/list">
            <img src={Voltar} alt="Voltar" />
          </a>
          <h3>Perfil</h3>
        </div>
        <div className="containerPerfil">
          <div className="esquerda">
            {associate && (
              <>
                <p>Nome: {associate.nome ?? " "}</p>
                <p>CPF: {associate.cpf ?? " "}</p>
                <p>RG: {associate.rg ?? " "}</p>
              </>
            )}
          </div>
          <div className="meio">
            {associate && (
              <>
                <p>Email: {associate.email ?? " "}</p>
                <p>Data Nascimento: {associate.datanascimento ?? " "}</p>
              </>
            )}
          </div>
          <div className="direito">
            <a
              href="/list"
              onClick={() => deleteAssociate(associate.id_associado)
              }
            >
              <img src={Lixeira} alt="Lixeira" />
            </a>
          </div>
        </div>

        <EmailList />
      </div>
    </>
  );
}
