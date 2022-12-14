import React from "react";
import Lixeira from "../../assets/img/lixeira.png";

import { deleteAssociate } from "../../services/requests";

export default function Asso(props) {
  const profileLink = () => {
    window.location.href = "/profile?fk=" + props.id;
  };

  return (
    <div>
      <h2 onClick={profileLink}>{props.nome}</h2>
      <a href="/list">
        <img
          src={Lixeira}
          alt="Lixeira"
          onClick={() => deleteAssociate(props.id)}
        />
      </a>
    </div>
  );
}
