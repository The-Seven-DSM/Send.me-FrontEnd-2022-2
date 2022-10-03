import React from "react";
import Verificado from "../../../assets/img/verificado.png"
import Naoverificado from "../../../assets/img/nao-verificado.png"
function Historico(){
    return  (
        <>
         <h3 className="Titulo"> Histórico de mensões </h3>
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
                                <td>Lucas</td>
                                <td> Lukinhas@gmial</td>
                                <td> Executivo II</td>
                                <td> <img src={Verificado} alt="Verificado" /></td>

                            </tr>
                            <tr>
                                <td>Lucas</td>
                                <td> Lukinhas@gmial</td>
                                <td> Executivo I</td>
                                <td> <img src={Naoverificado} alt="Não Verificado" /></td>
                            </tr>
                        </tbody>
                       
                    </table>

               
        </>
    )
}

export default Historico;