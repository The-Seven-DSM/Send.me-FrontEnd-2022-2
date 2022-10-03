import React from 'react'
import Header from '../Header/header'
import Voltar from '../../assets/img/voltar.png'
import Lixeira from '../../assets/img/lixeira.png'

function Lista (){
  return (
    <>
    <Header/>
    <div className="background">
        <div className="back-button-registration">
            <a href="/"><img src={Voltar} alt="Voltar" /></a>
            <h3>Lista de associados</h3>
        </div>
        <div className='bloco'> 
        <h2>Nome do serumanim</h2>
        <a href="/"><img src={Lixeira} alt="Lixeira" /></a>
        </div>
        <div className='bloco'> 
        <h2>Nome do serumanim</h2>
        <a href="/"><img src={Lixeira} alt="Lixeira" /></a>
        </div>
        <div className='bloco'> 
        <h2>Nome do serumanim</h2>
        <a href="/"><img src={Lixeira} alt="Lixeira" /></a>
        </div>
        <div className='bloco'> 
        <h2>Nome do serumanim</h2>
        <a href="/"><img src={Lixeira} alt="Lixeira" /></a>
        </div>
        
    </div>
    </>

  )
}

export default Lista