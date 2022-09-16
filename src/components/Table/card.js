import React from "react";

export default function Card(props) {

    // get(props.estado);{
    //     var teste = props.estado
    //     if (teste == false){
    //         console.log('enviado')
    //     }else{
    //         const teste = 'Nao enviado'
    //     }
    // }


    // if (props.estado == 0){
    //     var estadoEmail = "Não verificado"
    // } else{
    //     var estadoEmail = "Verificado"
    // }
    // document.getElementById('estado').innerHTML = estadoEmail;



    return <tr>
        {/* <td >{props.corpo}</td> */}
        <td ></td>
        <td ></td>
        <td >{props.pagina}</td>
        {/* <td id="estado"></td> */}
        <td >{props.estado}</td>
        {/* <td >{props.id_email}</td> */}
    </tr>
}