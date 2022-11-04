/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

const Cadastro_Backoffice = () => {

    return (
        <>
            <main className="salve">

                {/* <div className="cadastro">
                    <form action="/home">
                        <div className="detail">

                            <div className="input-box">
                                <p>Nome</p>
                                <input name="nome" placeholder="Digite seu Nome Completo" required />
                            </div>
                            <div className="input-box">
                                <p>CPF</p>
                                <input type="text" name="cpf" maxLength={12} placeholder="Ex: 000000000-00" required />
                            </div>
                            <div className="input-box">
                                <p>Data de Nascimento</p>
                                <input type="date" className="input-nascimento" name="datanascimento" required />
                            </div>
                            <div className="input-box">
                                <p>Telefone</p>
                                <input type='number' name="telefone" maxLength={11} placeholder="Ex: 12 00000-0000" required />
                            </div>
                            <div className="input-box">
                                <p>Escola Vinculada</p>
                                <input type='text' name="escola-vinculado" maxLength={11} placeholder="Digite o nome da escola em que está vinculado" required />
                            </div>
                            
                        </div>

                        <div className="button-registration">
                            <a href='/'>Voltar</a>
                            <input type="submit" value="CADASTRAR" />
                        </div>

                    </form>

                </div> */}

                <div className="cadastro">
                    <h3>Cadastro</h3>

                    <div>
                        <p>Nome</p>
                        <input name="nome" placeholder="Digite seu Nome Completo" required />
                    </div>
                    <div>
                        <p>CPF</p>
                        <input type="text" name="cpf" maxLength={12} placeholder="Ex: 000000000-00" required />
                    </div>
                    <div>
                        <p>Data de Nascimento</p>
                        <input type="date" className="input-nascimento" name="datanascimento" required />
                    </div>
                    <div>
                        <p>Telefone</p>
                        <input type='number' name="telefone" maxLength={11} placeholder="Ex: 12 00000-0000" required />
                    </div>
                    <div>
                        <p>Escola Vinculada</p>
                        <input type='text' name="escola-vinculado" maxLength={11} placeholder="Digite o nome da escola em que está vinculado" required />
                    </div>
                    <button onClick={() => auth()}>Cadastrar</button>
                    <p><a href="/">Voltar</a></p>

                </div>

            </main>

        </>

    )
}

export default Cadastro_Backoffice