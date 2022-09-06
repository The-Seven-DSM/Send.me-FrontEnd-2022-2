import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem ;
`;

export const Table = styled.table`
     border-collapse: collapse;
`;

export const Thead = styled.thead`
    position: sticky;
    top: 0;
    background: #f39d1c;
    width: 80%;
`;

export const Tbody = styled.tbody``;



export const Td = styled.td`
    width: 100%;
    padding: 10px 3rem;
    font-size: 14px;
`;

export const Th = styled.th`
    width: 100%;
    padding: 10px 3rem;
    font-size: 14px;
`;

export const InputContent = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between ;

`;

export const Input = styled.input`
    outline: none;
    width: 80%;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 20px 0;
    font-size: 15px;
    border: 1px solid #ccc
`;
