import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from '../Header/header'
import Voltar from '../../assets/img/voltar.png'

import Asso from "./Asso";

function Lista() {
  const [listGames, setListGames] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3001/get/associates`).then((resp) => {
      setListGames(resp.data);
    });
  }, [])
  return (
    <>
      <Header />
      <div className="background">
        <div className="back-button-registration">
          <a href="/home"><img src={Voltar} alt="Voltar" /></a>
          <h3>Lista de associados</h3>
        </div>
        <div className='bloco'>
          {typeof listGames !== 'undefined' && listGames.map((value) => {
            return <Asso
              listCard={listGames}
              setListCard={setListGames}
              id={value.id_associado}
              nome={value.nome}
            />
          })}
        </div>
      </div>
    </>

  )
}

export default Lista