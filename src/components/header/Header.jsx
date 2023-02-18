import React from "react";
import s from './Header.module.css';

function Header() {
    return <>
        <header>
            <img className={s.avatar} alt="avatar" src="https://www.film.ru/sites/default/files/filefield_paths/johnnydepp3110.jpg"></img>
            <span className={s.nickname}>nickname</span>
            <span className={s.title}>My notes</span>
            <img className={s.settings} alt="settings" src='https://cdn.onlinewebfonts.com/svg/download_272299.png'></img>
        </header>
    </>;
}

export default Header;