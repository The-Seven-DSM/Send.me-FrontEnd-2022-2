import React, { useState, useEffect } from "react";
import Voltar from '../../assets/img/voltar.png'
import Header from "../Header/header";
import Lixeira from '../../assets/img/lixeira.png'
import Caneta from '../../assets/img/caneta.png'
import Historico from "./historico/historico";
import Axios from "axios";

function Perfil() {
    const [listGames, setListGames] = useState([]);
    var nome = window.location.href.split('=')[1]
    useEffect(() => {
        Axios.get(`http://localhost:3001/perfil${nome}`).then((resp) => {
            setListGames(resp.data);
        });
    }, [])

    return (
        <>

            <Header />


            <div className="background">
                <div className="back-button-registration">
                    <a href="/lista"><img src={Voltar} alt="Voltar" /></a>
                    <h3>Perfil</h3>
                </div>
                <div className="containerPerfil">
                    <div className="esquerda">
                        {typeof listGames !== 'undefined' && listGames.map((value) => {
                            return value.nome ? <p>Nome:{value.nome}</p>
                                : <p>Nome: Sem valor</p>
                        })}

                        <p>CPF:37433421230</p>
                        <p>RG:999-999-99</p>
                    </div>
                    <div className="meio">
                        {typeof listGames !== 'undefined' && listGames.map((value) => {
                            return value.nome ? <p>Email:{value.email}</p>
                                : <p>Email: Sem valor</p>
                        })}
                        
                        <p>Data Nascimento: 12/23/2204</p>
                    </div>
                    <div className="direito">
                        <a href="/a"><img src={Lixeira} alt="Lixeira" /></a>
                        <a href="/a"><img src={Caneta} alt="Caneta" /></a>
                    </div>

                </div>

                <Historico />
            </div>
        </>
    )
}

export default Perfil;