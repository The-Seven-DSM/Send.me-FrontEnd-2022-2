import React, { useState, useEffect } from "react";
import Voltar from "../../assets/img/voltar.png";
import { Header } from "../";
import Lixeira from "../../assets/img/lixeira.png";
import Caneta from "../../assets/img/caneta.png";
import Historico from "./historico/historico";
import Axios from "axios";

function Perfil() {
  const [listGames, setListGames] = useState([]);
  var nome = window.location.href.split("=")[1];
  console.log(listGames.map((value) => value.id_associado));
  const id = listGames.map((value) => value.id_associado);
  useEffect(() => {
    Axios.get(`http://localhost:3001/perfil${nome}`).then((resp) => {
      setListGames(resp.data);
    });
  }, []);
  const deleta = () => {
    Axios.post(`http://localhost:3001/delete/${id}`).then((resp) => {
      console.log(resp);
    });
    alert("Associado foi deletado!");
  };
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
            {typeof listGames !== "undefined" &&
              listGames.map((value) => {
                return value.nome ? (
                  <p>Nome: {value.nome}</p>
                ) : (
                  <p>Nome: Sem valor</p>
                );
              })}
            {typeof listGames !== "undefined" &&
              listGames.map((value) => {
                return value.cpf ? (
                  <p>CPF: {value.cpf}</p>
                ) : (
                  <p>CPF: Sem Valor</p>
                );
              })}
            {typeof listGames !== "undefined" &&
              listGames.map((value) => {
                return value.rg ? (
                  <p>RG: {value.rg}</p>
                ) : (
                  <p>Data Nascimento: Sem Valor</p>
                );
              })}
          </div>
          <div className="meio">
            {typeof listGames !== "undefined" &&
              listGames.map((value) => {
                return value.email ? (
                  <p>Email: {value.email}</p>
                ) : (
                  <p>Email: Sem valor</p>
                );
              })}

            {typeof listGames !== "undefined" &&
              listGames.map((value) => {
                return value.datanascimento ? (
                  <p>Data Nascimento: {value.datanascimento}</p>
                ) : (
                  <p>Data Nascimento: Sem Valor</p>
                );
              })}
          </div>
          <div className="direito">
            <a href="/lista" onClick={() => deleta()}>
              <img src={Lixeira} alt="Lixeira" />
            </a>
            {/* <a href="/a"> */}
            <img src={Caneta} alt="Caneta" />
            {/* </a> */}
          </div>
        </div>

        <Historico />
      </div>
    </>
  );
}

export default Perfil;
