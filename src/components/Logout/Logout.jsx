import React from 'react';
import s from './Logout.module.scss';
import sprite from '../../images/sprite.svg';


export default function Logout({ onClick }) {
   return (
      <svg className={s.icon} onClick={onClick} width="22" height="16">
         <use href={sprite + "#icon-logout"}></use>
      </svg>
   )
}