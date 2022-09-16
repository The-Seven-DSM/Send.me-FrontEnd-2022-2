/* eslint-disable jsx-a11y/heading-has-content */
import Axios from "axios";
import React,{useState} from "react";
import Header from '../Header/header'


const Cadastro_Usuario = () => {
    const [values,setValues] = useState([]);
    const pega = (value) =>{
        setValues(preValue =>({
            
            ...preValue,
            [value.target.name]:value.target.value,
            
        }))
    }
    
    const manda = () => {
        Axios.post(`http://localhost:3001/create/associate`,{
            nome: values.nome,
            email: values.email,
            sexo: values.sexo
        }
        ).then(resp => {
            console.log(values); 
    });
    }
  return (
    <>
        <Header />
        <div className="fundinho">
            <div className="container">
                <div className="Titulo">
                    <h3>Cadastro de Associados</h3>
                </div>
                {/* <form> */}
                <div className="detail">
                    <div className="input-box">
                        <span>Nome Completo</span>
                        <input onChange={pega} name="nome"placeholder="Digite seu Nome Completo"/>
                    </div>
                    <div className="input-box">
                        <span>Email</span>
                        <input onChange={pega} name="email"placeholder="Digite seu Email"/>
                    </div>
                    <div className="input-box">
                        <span>Sexo</span>
                        <select onChange={pega} name='sexo'>
                            <option value="0">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </div>
                        <div className="botao">
                            <input onClick={() => manda()} type="submit" value="Adicionar"/>
                        </div>
                    </div>
                {/* </form> */}
            </div>
        </div>
       
    </>
    
  )
}

export default Cadastro_Usuario