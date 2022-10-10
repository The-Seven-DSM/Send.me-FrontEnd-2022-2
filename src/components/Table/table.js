import React,{ useState, useEffect} from "react";
import Axios from "axios";
import Card from "./card";
import Header from "../Header/header";
import month from "../utils/month";

const Table = () => {
    const data = new Date();
    const dia = data.getDate();
    const mes = month[data.getMonth()];
    const ano = data.getFullYear();
    const [listGames, setListGames] = useState([]);
    // const [setAssoc] = useState([]);
    // console.log(listGames.map((item) => item.associado.nome));
    // console.log(listGames.map((item) => item.corpo));
    console.log(listGames.map((item) => item.estado == true && item.envio==false? item.id_email: null));
    const sendMail = () => {
    
        Axios.post(`http://localhost:3001/send`, {
            id_email: listGames.map((item) => item.estado == true && item.envio==false? item.id_email: null),
            nome: listGames.map((item) => item.estado && !item.envio ? item.associado.nome: null ),
            corpo: listGames.map((item) => item.estado && !item.envio? item.corpo: null),
            email: listGames.map((item) => item.estado && !item.envio? item.associado.email: null),
            
            // `${ano}-${mes}-${dia}`,
            
        }
        ).then(resp => {
            console.log(resp);
        });
        alert("Todos os emails verificados foram enviados");
    }
    useEffect(() => {
        Axios.get(`http://localhost:3001/get/emails`).then((resp) => {
            setListGames(resp.data);
        });
    }, [])
    
    return (
        <>
            <Header />
            <main>
                <h1 className="title-table"> Diário Oficial - Dia {dia} de {mes} de {ano} </h1>
                <div className="search">
                    <input type="text" placeholder="Nome" />
                    <select>
                        <option value="" disabled selected>Selecione o Caderno</option>
                        <option value="0">Cidade</option>
                        <option value="1">Executivo I</option>
                        <option value="2">Executivo II</option>
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
                            {typeof listGames !== 'undefined'&& listGames.map((value) => {
                                return !value.envio ? <Card 
                                    listCard={listGames}
                                    setListCard={setListGames}
                                    id={value.id_email}
                                    fk={value.fk_id_associado}
                                    nome={value.associado.nome}
                                    email={value.associado.email}
                                    pagina={value.pagina.split('/')[8]}
                                    estado={value.estado}  
                                />
                                : null
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="send-table">
                    <p>Disparar por:</p>
                    <select>
                        <option value="" disabled selected>Selecione</option>
                        <option value="0">Todos</option>
                        <option value="1">Verificados</option>
                    </select>
                    <a href="/"><button className="send-email-home" onClick={() => sendMail()}>ENVIAR EMAILS</button>
                    </a>
                </div>
            </main>
        </>
    );
}

export default Table;