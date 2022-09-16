import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import Header from "../Header/header";
import Voltar from '../../assets/img/voltar.png'

const Editor = () => {
	const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/,
	};

	return (
        <>
        <Header />
        <div className="voltaremail">
                    <a href="/"><img src={Voltar} alt="Voltar"/></a>
                    <h3>Nome do Serumaninho</h3>
                </div>

        <div className="editor">
            <div className="pdf">
                <p>pdf</p>
            </div>
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
           
        </div>
        <div className="email-botao">
                <button className="validar-email">VALIDAR EMAIL</button>
                <button className="enviar-email">ENVIAR EMAIL</button>
            </div>
        </>
        );
}

export default Editor