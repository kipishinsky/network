import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props: any) => {

  return (
        <header className={s.header}>
            <img src="https://d32dm0rphc51dk.cloudfront.net/AwXYyUz1PC1aFF_05mEDrA/large.jpg" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
  );
}

export default Header;
