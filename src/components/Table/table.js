import React from "react";
import * as C from './styles';

function Table(){
    return(
        // <main>
        //     <div className="search">
              
        //     </div>
        //     <div className="fixed">
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Nome</th>
        //                 <th>Email</th>
        //                 <th>Pagina</th>
        //                 <th>Status</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //         <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //             <tr>
        //                 <td>Wallace da Silva</td>
        //                 <td>wllcfelipe@gmail.com</td>
        //                 <td>17</td>
        //                 <td>.</td>
        //             </tr>
        //         </tbody>
        //     </table>
        //     </div>
        // </main>

        <C.Main>
            <C.InputContent>
                <C.Input placeholder="Nome"/>
                <C.Input type="date"/>
            </C.InputContent>
            <C.Table>
                <C.Thead>
                    <C.Th>Nome</C.Th>
                    <C.Th>Email</C.Th>
                    <C.Th>Página</C.Th>
                    <C.Th>Status</C.Th>
                </C.Thead>
                <C.Tbody>
                    <C.Td>Wallace da Silva</C.Td>
                    <C.Td>wllcfelipe@gmail.com</C.Td>
                    <C.Td>17</C.Td>
                    <C.Td>V</C.Td>
                </C.Tbody>
                <C.Tbody>
                    <C.Td>Wallace da Silva</C.Td>
                    <C.Td>wllcfelipe@gmail.com</C.Td>
                    <C.Td>17</C.Td>
                    <C.Td>V</C.Td>
                </C.Tbody>
                <C.Tbody>
                    <C.Td>Wallace da Silva</C.Td>
                    <C.Td>wllcfelipe@gmail.com</C.Td>
                    <C.Td>17</C.Td>
                    <C.Td>V</C.Td>
                </C.Tbody>
                <C.Tbody>
                    <C.Td>Wallace da Silva</C.Td>
                    <C.Td>wllcfelipe@gmail.com</C.Td>
                    <C.Td>17</C.Td>
                    <C.Td>V</C.Td>
                </C.Tbody>
                <C.Tbody>
                    <C.Td>Wallace da Silva</C.Td>
                    <C.Td>wllcfelipe@gmail.com</C.Td>
                    <C.Td>17</C.Td>
                    <C.Td>V</C.Td>
                </C.Tbody>
            </C.Table>
        </C.Main>

    )
}

export default Table;