import React from 'react';
import s from './Logout.module.css';

const Logout = () => {
   return (
      <svg width="22" height="16">
         <use className={s.icon} href="./images/sprite.svg#icon-exit"></use>
      </svg>
   )
}

export default Logout