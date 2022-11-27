import React, { useState, useEffect } from "react";

import { Header } from "../../components";
import Voltar from "../../assets/img/voltar.png";

import Asso from "./Asso";
import "./style.css";

import { getAssociateList } from "../../services/requests";

export default function AssociateList() {
  const [associates, setAssociates] = useState([]);

  useEffect(() => {
    getAssociateList().then((response) => setAssociates(response));
  }, []);

  return (
    <>
      <Header />
      <div className="background">
        <div className="back-button-registration">
          <a href="/home">
            <img src={Voltar} alt="Voltar" />
          </a>
          <h3>Lista de associados</h3>
        </div>
        <div className="bloco">
          {typeof associates !== "undefined" &&
            associates.map((value) => {
              return (
                <Asso
                  listCard={associates}
                  setListCard={setAssociates}
                  id={value.id_associado}
                  nome={value.nome}

                />
              );
            })}
        </div>
      </div>
    </>
  );
}
