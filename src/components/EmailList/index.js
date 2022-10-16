import React, { useState, useEffect } from "react";

import { getAssociateEmails } from "../../services/requests";
import { Card } from "../";

import "./styles";

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
      <Title>Histórico</Title>
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
                  fromProfileScreen={true}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
}
