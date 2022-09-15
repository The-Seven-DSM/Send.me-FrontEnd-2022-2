import React,{useEffect,useState} from "react";
import Button from "./button";
import Header from "../Header/header";
import Axios from "axios";
import Card from "../card";

// import { FaCheckCircle } from "react-icons/fa";
// import { FaRegCheckCircle } from "react-icons/fa";

const Table = () => {
    const [values,setValues] = useState([]);
    const [listGames , setListGames ] = useState([]);
    console.log(listGames);
    const pega = (value) =>{
        setValues(preValue =>({
            ...preValue,
            [value.target.name]:value.target.value,
        }))
    }
    const sendMail = () => {
        Axios.post(`http://localhost:3001/send`,{
            name: listGames[0].name,
            email: listGames[0].email
        }
        ).then(resp => {
            console.log('salve'); 
    });
    }
    useEffect(() =>{
        Axios.get(`http://localhost:3001/get/associates`).then((resp) => {
            setListGames(resp.data);
        });
    } ,[] )
    return (
        <>
        <Header />
        <main>
            <div className="search">
              <input type="text" placeholder="Nome" onChange={pega}/>
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
            {typeof listGames !== 'undefined' && listGames.map((value) =>{
                return <Card key={value.id} 
                listCard={listGames}
                setListCard={setListGames}
                name = {value.name}
                email = {value.email}
                sex = {value.sex}
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
                onChange={pega}>enviar emails</button>
            </div>
        </main>
        </>
    );
}

export default Table;