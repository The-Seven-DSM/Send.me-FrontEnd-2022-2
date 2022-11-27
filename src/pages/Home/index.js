import React, { useState, useEffect } from "react";

import { Card, Header, WithoutBook } from "../../components";
import months from "../../utils/months";
import { getEmails, sendAllVerifiedEmails } from "../../services/requests";

import "./style.css";

export default function Home(hasNoBook) {
  const [emails, setEmails] = useState([]);
  const [opcao , setOpcao] = useState('');
  const [opcao2 , setOpcao2] = useState('t');

  console.log(opcao2);
  function handleChange2(value) {
    setOpcao2((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  }
  
  function handleChange(value) {
    setOpcao((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  }
  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
 
  useEffect(() => {
    getEmails().then((response) => setEmails(response));
  }, []);
  console.log(opcao2);

  if (hasNoBook){

    return (
      <>
        <Header />
        <main>
          <h1 className="title-table">
            Diário Oficial - Dia {day} de {month} de {year}
          </h1>
          <div className="search">
            
            <input type="text" placeholder="Nome" />
            
            <select  
              name = "opcao2"
              onChange={handleChange2}>

              <option 
              value="todos" 
              selected>
                Selecione o Caderno
              </option>

              <option 
              value="cidade"
              >Cidade</option>
              <option 
              value="exec1"
              >Executivo I</option>
              
              <option 
              value="exec2"
              >Executivo II</option>
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
            
                {emails  &&
                  emails.map((value, index) => {
                    return (
                      !value.envio && opcao2.opcao2 == value.pagina.split("/")[8]? (
                        <Card
                          key={index}
                          id={value.id_email}
                          fk={value.fk_id_associado}
                          nome={value.associado.nome}
                          email={value.associado.email}
                          pagina={value.pagina.split("/")[8]}
                          estado={value.estado}
                          fromHomeScreen='2'
                        />
                      ) : !value.envio && (opcao2 == 't' || opcao2.opcao2 == 'todos' || opcao2=='todos')?(
                      <Card
                      key={index}
                      id={value.id_email}
                      fk={value.fk_id_associado}
                      nome={value.associado.nome}
                      email={value.associado.email}
                      pagina={value.pagina.split("/")[8]}
                      estado={value.estado}
                      fromHomeScreen='2'
                    /> )
                      : null
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="send-table">
            <p>Disparar por:</p>
            <form action="/home">
            <select name = "opcao" onChange={handleChange}>
              <option  value="" selected>
                Selecione
              </option>
              <option value="0">Todos</option>
              <option value="1">Verificados</option>
            </select>
            <a>
              <button
                className="send-email-home"
                onClick={() => sendAllVerifiedEmails(opcao,emails)}
              >
                ENVIAR EMAILS
              </button>
            </a>
            </form>
          </div>
        </main>
      </>
    );
  }

  return <WithoutBook />;
}
