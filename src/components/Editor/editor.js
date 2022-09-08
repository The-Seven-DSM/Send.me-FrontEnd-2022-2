import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import Header from "../Header/header";

const Editor = () => {
	const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/,
	};

	return (
        <>
        <Header />
        <div className="search">
            <h3>Verificar Email / Editar Email</h3>
        </div>
        <div className="editor">
            
            <JoditEditor 
            	ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
            <div className="pdf">
                <h3>pdf</h3>
            </div>
        </div>
        <div className="send">
                <button className="push">Validar Email</button>
                <button className="empty">Enviar Emails</button>
            </div>
        </>
        );
}

export default Editor