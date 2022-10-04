import React from "react";
import Voltar from '../../assets/img/voltar.png'
import Header from "../Header/header";
import Lixeira from '../../assets/img/lixeira.png'
import Caneta from '../../assets/img/caneta.png'
import Historico from "./historico/historico";
function Perfil (){
    return(
        <>
        
        <Header />
        
  
            <div className="background">
             <div className="back-button-registration">
                    <a href="/"><img src={Voltar} alt="Voltar" /></a>
                    <h3>Perfil</h3>
                </div>
                <div className="containerPerfil"> 
                <div className="esquerda">
                    <p>Nome:Lukinhas</p>
                    <p>CPF:37433421230</p>
                    <p>RG:999-999-99</p>
                </div>
                <div className="meio"> 
                    <p>Email: Lukinhas@gmial.com</p>
                    <p>Data Nascimento: 12/23/2204</p>
                </div>
                <div className="direito"> 
                    <a href="/a"><img src={Lixeira} alt="Lixeira" /></a>
                    <a href="/a"><img src={Caneta} alt="Caneta" /></a>
                </div>

                </div>
               
                <Historico/>
            </div>
        </>
    ) 
}

export default Perfil;