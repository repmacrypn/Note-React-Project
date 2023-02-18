import React from "react";
import s from './Footer.module.css';

function Footer() {
    return <div className={s.footer}>
        some info abt the author
        <span className={s.author}>Created by Art&m Efimovich</span>
    </div>;
}

export default Footer;