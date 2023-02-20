import React from "react";
import s from './AbstractButton.module.css'

function AbstractButton({ deleteNote, index }) {
    return <span
        onClick={() => deleteNote(index)}
        className={s.noteButton}>
        [X]
    </span>;
}

export default AbstractButton;