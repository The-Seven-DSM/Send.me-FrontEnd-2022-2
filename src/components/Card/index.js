import React from "react";

import Verificado from "../../assets/img/verificado.png";
import Naoverificado from "../../assets/img/nao-verificado.png";

export default function Card(props, fromProfileScreen = false) {
  function handleClick() {
    window.location.href =
      "/editor?id=" +
      props.id +
      "&nome=" +
      props.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "") +
      "&fk=" +
      props.fk;
  }

  return (
    <tr onClick={handleClick}>
      <td>{props.nome}</td>
      <td>{props.email}</td>
      <td>
        {props.pagina === "exec1"
          ? "Executivo I"
          : props.pagina === "exec2"
          ? "Executivo II"
          : "Cidade"}
      </td>

      {fromProfileScreen ? (
        <td>{props.envio == "1" ? "Enviado" : "Não Enviado"}</td>
      ) : (
        <td>
          {props.estado ? (
            <img src={Verificado} alt="Verificado" />
          ) : (
            <img src={Naoverificado} alt="Não verificado" />
          )}
        </td>
      )}
    </tr>
  );
}
