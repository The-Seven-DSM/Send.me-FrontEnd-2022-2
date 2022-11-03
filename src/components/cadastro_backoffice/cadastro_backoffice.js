/* eslint-disable jsx-a11y/heading-has-content */
import Header from '../Header/header'
import Voltar from '../../assets/img/voltar.png'

const Cadastro_Backoffice = () => {
    // if (localStorage.getItem("token") == null) {
    //     window.location.href = "/";
    //     }
    return (
        <>
            <Header />
            <div className="background">
                <div className="back-button-registration">
                    <a href="/home"><img src={Voltar} alt="Voltar" /></a>
                    <h3>Cadastro do BackOffice</h3>
                </div>
                <div className="container">
                    <form action="/home">
                        <div className="detail">

                            <div className="input-box">
                                <span>Nome</span>
                                <input name="nome" placeholder="Digite seu Nome Completo" required />
                            </div>
                            <div className="input-box">
                                <span>CPF</span>
                                <input type="text" name="cpf" maxLength={12} placeholder="Ex: 000000000-00" required />
                            </div>
                            <div className="input-box">
                                <span>Data de Nascimento</span>
                                <input type="date" className="input-nascimento" name="datanascimento" required />
                            </div>
                            <div className="input-box">
                                <span>Telefone</span>
                                <input type='number' name="telefone" maxLength={11} placeholder="Ex: 12 00000-0000" required />
                            </div>
                            <div className="input-box">
                                <span>Escola Vinculada</span>
                                <input type='text' name="escola-vinculado" maxLength={11} placeholder="Digite o nome da escola em que está vinculado" required />
                            </div>
                            
                        </div>

                        <div className="button-registration">
                            <input type="submit" value="CADASTRAR" />
                        </div>

                    </form>

                </div>
            </div>

        </>

    )
}

export default Cadastro_Backoffice