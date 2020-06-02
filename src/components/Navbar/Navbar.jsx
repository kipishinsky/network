import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

  return (
      <nav className={s.nav}>
          <div className = {s.item}>
              <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink> {/*
              чтобы изменить адресную строку не перезагружая страницу,
              нужно использовать специальный тег <NavLink>, вместо тега <a>, вместо href
              исользует to='', такой синтаксис у navLinka.
              */}
          </div>
          <div className = {`${s.item} ${s.active}`}> {/*повесили 2 класса на ссылку,
          один дефолтный, другой активный(т.е. при нажатии на ссылку класс поменяется
          на активный цвет и тем самым мы будем видеть какой раздел сейчас выбран
          */}
              <NavLink to='/news' activeClassName={s.active}>News</NavLink>
          </div>
          <div className = {s.item}>
              <NavLink to='/dialogs' activeClassName={s.active}>Message</NavLink>
          </div>
          <div className = {s.item}>
              <NavLink to='/video' activeClassName={s.active}>Video</NavLink>
          </div>
          <div className = {s.item}>
              <NavLink to='/audio' activeClassName={s.active}>Audio</NavLink>
          </div>
          <div className = {s.item}>
              <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
          </div>
      </nav>
  );
}

export default Navbar;
