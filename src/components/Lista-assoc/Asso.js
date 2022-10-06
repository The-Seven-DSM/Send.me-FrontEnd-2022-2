import React from "react";
import Lixeira from '../../assets/img/lixeira.png'

export default function Asso(props) {
    const bb = props.nome
    const Link = () => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/perfil?nome=' + bb
    }

    return <div onClick={Link}>
            <h2>{props.nome}</h2>
            <a href="/"><img src={Lixeira} alt="Lixeira" /></a>
        </div>
}