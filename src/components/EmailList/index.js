import React, { useState, useEffect } from "react";

import { getAssociateEmails } from "../../services/requests";
import { Card } from "../";

import "./style.css";

export default function EmailList() {
  const [associate, setAssociate] = useState();
  const [associateEmails, setAssociateEmails] = useState([]);

  useEffect(() => {
    getAssociateEmails(window.location.href.split("=")[1]).then((response) => {
      setAssociate(response);
      setAssociateEmails(response.emails);
    });
  }, []);

  return (
    <>
      <h3>Histórico</h3>
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
          {associateEmails &&
            associateEmails.map((email, index) => {
              return (
                <Card
                  key={index}
                  id={email.id_email}
                  nome={associate.nome}
                  email={associate.email}
                  pagina={email.pagina.split("/")[8]}
                  estado={email.estado}
                  envio={email.envio}
                  fromProfileScreen= {true}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
}
