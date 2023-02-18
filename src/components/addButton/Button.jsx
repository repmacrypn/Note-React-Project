import React from "react";
import s from './Button.module.css';

function Button() {
    return <div>
        <button className={s.buttonStyle}>Add New Note</button>
    </div>;
}

export default Button;