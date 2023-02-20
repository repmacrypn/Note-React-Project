import React from "react";
import AbstractButton from "./abstractButton/AbstractButton";
import s from './AbstractNote.module.css'

function AbstractNote({ id, text, changeIsEditTrue, deleteNote, index }) {
    return <p
        className={s.note}
        onClick={(event) => changeIsEditTrue(id, event)}>
        {text}
        <AbstractButton
            deleteNote={deleteNote}
            index={index}
        ></AbstractButton>
    </p>;
}

export default AbstractNote;