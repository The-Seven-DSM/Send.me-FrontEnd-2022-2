import React from "react";
import Button from "./button";
import Header from "../Header/header";
import Verificado from "../../assets/img/verificado.png"
import Naoverificado from "../../assets/img/nao-verificado.png"
// import { FaCheckCircle } from "react-icons/fa";
// import { FaRegCheckCircle } from "react-icons/fa";


const Table = () => {

    const Link = () => {
       
        // eslint-disable-next-line no-restricted-globals
        location.href = `/editor`
    }

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();

    return (
        <>
        <Header />
        <main>
            <h1 className="titulo"> Diário Oficial - Dia {dia} de {mes} de {ano} </h1>
            <div className="busca">
              <input type="text" placeholder="Nome"/>
              <select>
                    <option value="" disabled selected>Selecione o Caderno</option>
                    <option value="0">Cidade</option>
                    <option value="1">Executivo I</option>
                    <option value="2">Executivo II</option>
                </select>
            </div>
            <div className="table-section">
            <table>
                <thead>
                    <tr>
                        
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Caderno</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={Link}> 
                        <td>Wallace da Silva </td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo I</td>
                        <td><img className="img-verificado" src={Verificado} alt="Verificado"/></td>
                    
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo II</td>
                        <td><img className="img-verificado" src={Naoverificado} alt="Verificado"/></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Cidade</td>
                        <td><img className="img-verificado" src={Naoverificado} alt="Verificado"/></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo I</td>
                        <td><img className="img-verificado" src={Verificado} alt="Verificado"/></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo I</td>
                        <td><img className="img-verificado" src={Naoverificado} alt="Verificado"/></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo II</td>
                        <td><img className="img-verificado" src={Verificado} alt="Verificado"/></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Caderno</td>
                        <td><img className="img-verificado" src={Verificado} alt="Verificado"/></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Caderno</td>
                        <td><img className="img-verificado" src={Verificado} alt="Verificado"/></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
            <div className="enviar">
                <p>Disparar por:</p>
                <select>
                    <option value="" disabled selected>Selecione</option>
                    <option value="0">Todos</option>
                    <option value="1">Verificados</option>
                </select>
                <button className="enviar-email-home">ENVIAR EMAILS</button>
            </div>
        </main>
        
        </>
    );
}

export default Table;