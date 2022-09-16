import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Axios from "axios";
import Card from "./card";

// import { FaCheckCircle } from "react-icons/fa";
// import { FaRegCheckCircle } from "react-icons/fa";

const Table = () => {
    const [listGames, setListGames] = useState([]);
    const [Assoc , setAssoc] = useState([])
    console.log(listGames);
    console.log(Assoc);
    const sendMail = () => {
        Axios.post(`http://localhost:3001/send`, {
            name: listGames.map((item) => item.name),
            email: listGames.map((item) => item.email)
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
    useEffect(() => {
        Axios.get(`http://localhost:3001/get/associates`).then((resp) => {
            setAssoc(resp.data);
        });
    }, [])
    return (
        <>
            <Header />
            <main>
                <div className="search">
                    <input type="text" placeholder="Nome" />
                    <select>
                        <option value="0">Selecione</option>
                        <option value="1">Teste1</option>
                        <option value="2">Teste2</option>
                    </select>
                </div>
                <div className="table-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Pagina</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {typeof listGames !== 'undefined' && listGames.map((value) => {
                                return <Card key={value.id}
                                    listCard={listGames}
                                    setListCard={setListGames}
                                    // corpo = {value.corpo}
                                    pagina={value.pagina}
                                    estado={value.estado}
                                // id_email = {value.id_email}
                                />

                            })}
                        </tbody>
                    </table>
                </div>
                <div className="send">
                    <p>Disparar por:</p>
                    <select>
                        <option value="0">Selecione</option>
                        <option value="1">Verificados</option>
                        <option value="2">Não Verificados</option>
                    </select>
                    <button className="push"
                        onClick={() => sendMail()
                        }
                    >enviar emails</button>
                </div>
            </main>
        </>
    );
}

export default Table;