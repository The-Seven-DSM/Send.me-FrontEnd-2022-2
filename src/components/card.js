import React from "react";

export default function Card(props){
    return <tr >
                <td >{props.name}</td>
                <td >{props.email}</td>
                <td >{props.sex}</td>
                
                </tr>

 
}