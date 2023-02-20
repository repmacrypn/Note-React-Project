import React from "react";
import s from './Button.module.css';

function Button({ notes, setNote, initObj }) {

    return <div>
        <button className={s.buttonStyle} onClick={() => setNote([...notes, initObj])}>Add New Note</button>
    </div>;
}

export default Button;