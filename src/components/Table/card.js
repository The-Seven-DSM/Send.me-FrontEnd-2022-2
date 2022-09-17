import React from "react";
import Verificado from "../../assets/img/verificado.png"
import Naoverificado from "../../assets/img/nao-verificado.png"

export default function Card(props) {
    const Link = () => {

        // eslint-disable-next-line no-restricted-globals
        location.href = `/editor`
    }
    return <tr onClick={Link}>
        <td ></td>
        <td ></td>
        <td >{props.pagina}</td>
        <td >{props.estado ? <img src={Verificado} /> : <img src={Naoverificado}/>}</td>
    </tr>
}