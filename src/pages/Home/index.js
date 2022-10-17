import React, { useState, useEffect } from "react";

import { Card, Header, WithoutBook } from "../../components";
import months from "../../utils/months";
import { getEmails, sendAllVerifiedEmails } from "../../services/requests";

import "./style.css";

export default function Home(hasNoBook) {
  const [emails, setEmails] = useState([]);

  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  useEffect(() => {
    getEmails().then((response) => setEmails(response));
  }, []);

  if (!hasNoBook) {
    return (
      <>
        <Header />
        <main>
          <h1 className="title-table">
            Diário Oficial - Dia {day} de {month} de {year}
          </h1>
          <div className="search">
            <input type="text" placeholder="Nome" />
            <select>
              <option value="" selected>
                Selecione o Caderno
              </option>
              <option value="0">Cidade</option>
              <option value="1">Executivo I</option>
              <option value="2">Executivo II</option>
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
                {emails &&
                  emails.map((value, index) => {
                    return (
                      !value.envio && (
                        <Card
                          key={index}
                          id={value.id_email}
                          fk={value.fk_id_associado}
                          nome={value.associado.nome}
                          email={value.associado.email}
                          pagina={value.pagina.split("/")[8]}
                          estado={value.estado}
                        />
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="send-table">
            <p>Disparar por:</p>
            <select>
              <option value="" selected>
                Selecione
              </option>
              <option value="0">Todos</option>
              <option value="1">Verificados</option>
            </select>
            <a href="/home">
              <button
                className="send-email-home"
                onClick={() => sendAllVerifiedEmails(emails)}
              >
                ENVIAR EMAILS
              </button>
            </a>
          </div>
        </main>
      </>
    );
  }

  return <WithoutBook />;
}
