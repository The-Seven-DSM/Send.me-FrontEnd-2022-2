import React,{ useState, useEffect} from "react";
import Axios from "axios";
import Card from "./card";
import Header from "../Header/header";
import month from "../utils/month";

const Table = () => {
    const [listGames, setListGames] = useState([]);
    // const [setAssoc] = useState([]);
    const sendMail = () => {
        Axios.post(`http://localhost:3001/send`, {
            name: listGames.map((item) => item.associado.nome),
            email: listGames.map((item) => item.associado.email),
            corpo: listGames.map((item) => item.corpo),
        }
        ).then(resp => {
            console.log(resp);
        });
    }
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/get/emails`).then((resp) => {
            setListGames(resp.data);
        });
    }, [])
    // useEffect(() => {
    //     Axios.get(`http://localhost:3001/get/associates`).then((resp) => {
    //         setAssoc(resp.data);
    //     });
    // }, [])
    const data = new Date();
    const dia = data.getDate();
    const mes = month[data.getMonth()];
    const ano = data.getFullYear();

    return (
        <>
            <Header />
            <main>
                <h1 className="titulo"> Diário Oficial - Dia {dia} de {mes} de {ano} </h1>
                <div className="busca">
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
                <div className="enviar">
                    <p>Disparar por:</p>
                    <select>
                        <option value="" disabled selected>Selecione</option>
                        <option value="0">Todos</option>
                        <option value="1">Verificados</option>
                    </select>
                    <button className="enviar-email-home"onClick={() => sendMail()}>ENVIAR EMAILS</button>
                </div>
            </main>
        </>
    );
}

export default Table;