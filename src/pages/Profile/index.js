import React, { useState, useEffect } from "react";

import { Header, EmailList } from "../../components";

import Voltar from "../../assets/img/voltar.png";
import Lixeira from "../../assets/img/lixeira.png";
import Caneta from "../../assets/img/caneta.png";

import { getAssociateEmails, deleteAssociate } from "../../services/requests";

export default function Perfil() {
  const [associate, setAssociate] = useState([]);

  useEffect(() => {
    getAssociateEmails(window.location.href.split("=")[1]).then((response) =>
      setAssociate(response)
    );
  }, []);

  return (
    <>
      <Header />

      <div className="background">
        <div className="back-button-registration">
          <a href="/lista">
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
              onClick={() =>
                deleteAssociate(associate.map((value) => value.id_associado))
              }
            >
              <img src={Lixeira} alt="Lixeira" />
            </a>

            <img src={Caneta} alt="Caneta" />
          </div>
        </div>

        <EmailList />
      </div>
    </>
  );
}
