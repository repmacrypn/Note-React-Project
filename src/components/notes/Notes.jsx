import React from "react";
import s from './Notes.module.css';

function Notes({ text }) {
    return <div className={s.note}>
        {text}
    </div>;
}

export default Notes;