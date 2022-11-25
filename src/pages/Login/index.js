import React, { useState } from "react";

import { login } from "../../services/requests";

import "./style.css";

const Login = () => {
  const [values, setValues] = useState([]);

  const pega = (value) => {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };
  const auth = () => {
    if (values.email == null || values.senha == null) {
      alert("Preencha todos os campos");
    } else {
      let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
      localStorage.setItem("token", token);
      login(values);
    }
  };

  return (
    <main className="salve">
      <div className="login">
        <h3>Login</h3>

        <div>
          <p>Email </p>
          <input onChange={pega} type="text" name="email" id="nome" />
        </div>
        <div>
          <p>Senha </p>
          <input onChange={pega} type="password" name="senha" id="senha" />
        </div>
        <button onClick={() => auth()}>Entrar</button>
        <p>Não possui conta?<a href="/cadastro_backoffice"> Cadastre-se aqui!</a></p>
      </div>
      
    </main>
  );
};

export default Login;
