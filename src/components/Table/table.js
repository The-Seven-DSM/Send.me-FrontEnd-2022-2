import React from "react";
import Button from "./button";
import Header from "../Header/header";
// import { FaCheckCircle } from "react-icons/fa";
// import { FaRegCheckCircle } from "react-icons/fa";

const Table = () => {

    return (
        <>
        <Header />
        <main>
            <div className="search">
              <input type="text" placeholder="Nome"/>
              <select>
                    <option value="0">Selecione</option>
                    <option value="1">Teste1</option>
                    <option value="2">Teste2</option>
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
                <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo I</td>
                        <td><Button /></td>
                        
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo II</td>
                        <td><Button /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Cidade</td>
                        <td><Button /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo I</td>
                        <td><Button /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo I</td>
                        <td><Button /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo II</td>
                        <td><Button /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Caderno</td>
                        <td><Button /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Caderno</td>
                        <td><Button /></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
            <div className="send">
                <p>Disparar por:</p>
                <select>
                    <option value="0">Selecione</option>
                    <option value="1">Verificados</option>
                    <option value="2">Não Verificados</option>
                </select>
                <button className="push">enviar emails</button>
            </div>
        </main>
        </>
    );
}

export default Table;