import React from 'react'

function Login(){
    return(
        <main className='salve'>
            <div className="login">
                <h3>Login</h3>
                <div>
                    <p>Nome </p>
                    <input type="text" name="nome" id="nome" required/>
                    </div>
                <div> 
                    <p>Senha </p>
                    <input type="password" name="senha" id="senha" required/>
                </div>
                <button>Entrar</button> 
            </div>
        </main>
    )
};

export default Login