import React, { useState } from "react";

import { Header } from "../../components";
import Voltar from "../../assets/img/voltar.png";

import { createAssociate } from "../../services/requests";

import "./style.css";

export default function CreateAssociate() {
  const [associate, setAssociate] = useState([]);

  function handleChange(value) {
    setAssociate((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  }

  return (
    <>
      <Header />
      <div className="background">
        <div className="back-button-registration">
          <a href="/home">
            <img src={Voltar} alt="Voltar" />
          </a>
          <h3>Cadastro de Associados</h3>
        </div>
        <div className="container">
          <form action="/home">
            <div className="detail">
              <div className="input-box">
                <span>Nome</span>
                <input
                  onChange={handleChange}
                  name="nome"
                  placeholder="Digite seu Nome Completo"
                  required
                />
              </div>
              <div className="input-box">
                <span>Email</span>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Digite seu Email"
                  required
                />
              </div>
              <div className="input-box">
                <span>CPF</span>
                <input
                  onChange={handleChange}
                  type="text"
                  name="cpf"
                  maxLength={12}
                  placeholder="Ex: 000000000-00"
                  required
                />
              </div>
              <div className="input-box">
                <span>RG</span>
                <input
                  onChange={handleChange}
                  type="text"
                  name="rg"
                  maxLength={10}
                  placeholder="Ex: 00000000-0"
                  required
                />
              </div>
              <div className="input-box">
                <span>Data de Nascimento</span>
                <input
                  onChange={handleChange}
                  type="date"
                  className="input-nascimento"
                  name="datanascimento"
                  required
                />
              </div>
              <div className="input-box">
                <span>Gênero</span>
                <select
                  name="genero"
                  onChange={handleChange}
                  placeholder="Digite seu Nome Completo"
                  required
                >
                  <option value="" disabled selected>
                    Selecione:
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
              </div>
            </div>

            <div className="button-registration">
              <input
                onClick={() => createAssociate(associate)}
                type="submit"
                value="CADASTRAR"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
