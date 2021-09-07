import React from 'react';
import style from './Header.module.css';

class Header extends React.Component {
    render() {
        return (
            <div className={style.header}>
                <a href="#" className={style.logo}>HABR</a>
                <div className={style.header_right}>
                    <a className={style.active} href="#home">Все</a>
                    <a href="#">Новости</a>
                    <a href="#">Статьи</a>
                </div>
            </div>
        )
    }
}

export default Header;