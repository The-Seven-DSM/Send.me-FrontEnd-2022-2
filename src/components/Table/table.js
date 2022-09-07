import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

function Table(){
 
    return(
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
                        <th>Pagina</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td><button id="scr">Verificar</button></td>
                        
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td><FaRegCheckCircle /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td><FaRegCheckCircle /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td><FaRegCheckCircle /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td><FaCheckCircle /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td><FaCheckCircle /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td><FaCheckCircle /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td><FaCheckCircle /></td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <td>Wallace da Silva</td>
                        <td>wllcfelipe@gmail.com</td>
                        <td>17</td>
                        <td>.</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="send">
                <p>Disparar por:</p>
                <select>
                    <option value="0">Selecione</option>
                    <option value="1">Teste1</option>
                    <option value="2">Teste2</option>
                </select>
                <button>enviar emails</button>
            </div>
        </main>
    )
}

export default Table;