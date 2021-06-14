import React from 'react';
import s from './ButtonAddCard.module.css';

export default function ButtonAddCard({ onClick }) {

   return (
      <button
         className={s.button}
         onClick={onClick}
      >
         +
      </button>
   )
}