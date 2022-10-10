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
        Axios.post(`http://localhost:3001/auth`, {
            email: values.email,
            senha: values.senha,
        }
        ).then(resp => {
            console.log(typeof(resp.data));
            if (resp == null || resp.data == null || values.email == null || values.senha == null) {
                window.location.href = "/";

            }
            else {
                window.location.href = "/home"
            }
        });
        // console.log(values);
        // if (values == 'null') {
        //     window.location.href ="/aa"

        // }
        // else{
        //     window.location.href ="/aaa"
        // }
    }


    return (
        <main className='salve'>
            <form>
            <div className="login">
                <h3>Login</h3>
                
                <div>
                    <p>Email </p>
                    <input onChange={pega} type="text" name="email" id="nome" required />
                </div>
                <div>
                    <p>Senha </p>
                    <input onChange={pega} type="password" name="senha" id="senha" required />
                </div>
                <button onClick={() => auth()}>Entrar</button>
                
                
            </div>
            </form>
        </main>
    )
};

export default Login