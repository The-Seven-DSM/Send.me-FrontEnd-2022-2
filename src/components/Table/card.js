import React from "react";
import Verificado from "../../assets/img/verificado.png"
import Naoverificado from "../../assets/img/nao-verificado.png"

export default function Card(props) {
    const aa = props.id
    const bb = props.nome
    const cc = props.fk
    const Link = () => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/editor?id='+aa+'&nome='+bb.normalize('NFD').replace(/[\u0300-\u036f]/g, "") +'&fk='+cc
      }
    
    return <tr onClick =  { Link }>
            <td >{props.nome}</td>
            <td >{props.email}</td>
            <td >{props.pagina === "exec1"? "Executivo I" : props.pagina === "exec2"? "Executivo II" : "Cidade"}</td>
            <td >{props.estado ? <img src={Verificado} /> : <img src={Naoverificado}/>}</td>
        </tr >
}
