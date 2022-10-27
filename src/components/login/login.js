import React, { useState } from "react";

import Axios from "axios";

const Login = () => {
    const [values, setValues] = useState([]);
    
    const pega = (value) => {
        setValues(preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }
    const auth = () => {
        if (values.email == null || values.senha == null) {
            alert("Preencha todos os campos");
        }
        else {
            Axios.post(`http://localhost:3001/auth`, {
                email: values.email,
                senha: values.senha,
            }
            ).then(resp => {
                console.log(resp.data);
                console.log(resp);
                if (resp.data == null) {
                    alert("Email ou senha incorretos");
                    window.location.href = "/";

                }
                else {
                    window.location.href = "/home"
                }
            });
        }

    }


    return (
        <main className='salve'>
            
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


                </div>
            
        </main>
    )
};

export default Login