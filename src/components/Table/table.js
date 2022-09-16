import React from "react";
import Button from "./button";
import Header from "../Header/header";
// import { FaCheckCircle } from "react-icons/fa";
// import { FaRegCheckCircle } from "react-icons/fa";


const Table = () => {

    const Link = () => {
       
        // eslint-disable-next-line no-restricted-globals
        location.href = `/editor`
    }
    return (
        <>
        <Header />
        <main>
            <div className="search">
              <input type="text" placeholder="Nome"/>
              <select>
                    <option value="0">Selecione o Caderno</option>
                    <option value="1">Cidade</option>
                    <option value="2">Executivo I</option>
                    <option value="3">Executivo II</option>
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
                        <td><Button /></td>
                    
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo II</td>
                        <td><Button /></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Cidade</td>
                        <td><Button /></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo I</td>
                        <td><Button /></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo I</td>
                        <td><Button /></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Executivo II</td>
                        <td><Button /></td>
                    </tr>
                    <tr onClick={Link}>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>Caderno</td>
                        <td><Button /></td>
                    </tr>
                    <tr onClick={Link}>
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
                    <option value="1">Todos</option>
                    <option value="2">Verificados</option>
                </select>
                <button className="push">ENVIAR EMAILS</button>
            </div>
        </main>
        </>
    );
}

export default Table;