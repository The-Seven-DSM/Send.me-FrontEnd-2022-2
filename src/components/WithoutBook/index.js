import React from "react";

import ErrorImg from "../../assets/img/ilustration-error.png";

export default function WithoutBook() {
  return (
    <main className="error">
      <img className="error-img" src={ErrorImg} alt="Erro" />
      <p className="error-text-title"> Ops...</p>
      <p className="error-text-body">
        Parece que não temos Diário Oficial no dia de hoje
      </p>
    </main>
  );
}
