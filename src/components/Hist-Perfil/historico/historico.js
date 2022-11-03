import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card3 from "./card3";
function Historico() {
    if (localStorage.getItem("token") == null) {
        window.location.href = "/";
        }
    const [listGames, setListGames] = useState([]);
    var nome = window.location.href.split('=')[1]
    useEffect(() => {
        Axios.get(`http://localhost:3001/perfil${nome}`).then((resp) => {
            setListGames(resp.data);
        });
    }, [])
    return (
        <>  
            {/* {listGames.map((value) => value.emails.map((item) => {
                return item.emails ? "oi"
                :
                "null"
            }))} */}
            <h3 className="Titulo"> Histórico</h3>
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
                    {typeof listGames !== 'undefined' && listGames.map((value) => value.emails.map((item) => {
                        return <Card3
                            listCard={listGames}
                            setListCard={setListGames}
                            id={item.id_email}
                            nome={value.nome}
                            email={value.email}
                            pagina={item.pagina.split('/')[8]}
                            estado={item.estado}
                            envio={item.envio}
                        />

                    }))}
                </tbody>
            </table>
        </>
    )
}

export default Historico;