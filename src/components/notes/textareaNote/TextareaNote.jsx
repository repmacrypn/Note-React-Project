import React from "react";
import s from './TextareaNote.module.css'

function TextareaNote({ id, text, changeIsEditFalse, handlechange }) {
    return <textarea
        className={s.textNote}
        value={text}
        onChange={(event) => handlechange(id, event)}
        onBlur={() => changeIsEditFalse(id)}>
    </textarea>;
}

export default TextareaNote;