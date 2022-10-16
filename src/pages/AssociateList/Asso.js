import React from "react";
import Lixeira from "../../assets/img/lixeira.png";
import Axios from "axios";

export default function Asso(props) {
  const bb = props.nome;
  const id = props.id;
  const Link = () => {
    Axios.post(`http://localhost:3001/delete/${id}`).then((resp) => {
      console.log(resp);
    });
    alert("Associado foi deletado!");
  };
  const perfil = () => {
    window.location.href = "/perfil?nome=" + bb;
  };

  return (
    <div>
      <h2 onClick={perfil}>{props.nome}</h2>
      <a href="/lista">
        <img src={Lixeira} alt="Lixeira" onClick={Link} />
      </a>
    </div>
  );
}
