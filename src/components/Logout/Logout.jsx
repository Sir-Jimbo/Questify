import React from 'react';
import s from './Logout.module.css';

export default function Logout({ onClick }) {
   return (
      <svg onClick={onClick} width="22" height="16">
         <use className={s.icon} href="./images/sprite.svg#icon-logout"></use>
      </svg>
   )
}