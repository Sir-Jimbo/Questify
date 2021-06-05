import React from 'react';
import Logo from '../Logo/Logo';
import Login from '../Login/Login';
import Logout from '../Logout/Logout'
import s from './Header.module.css';


export default function Header() {
   return (
      <header className={s.container}>
         <Logo />
         <Login />
         <Logout />
      </header>
   )
}