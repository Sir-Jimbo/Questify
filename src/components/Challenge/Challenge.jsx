import React from 'react';
import s from './Challenge.module.css';

export default function Challenge({ handleClickCreate }) {

   return (
      <div className={s.card}>
         <div className={s.level}>
            <ul>
               <li>
                  Easy
               </li>
               <li>
                  Normal
               </li>
               <li>
                  Hard
               </li>
            </ul>
            <img src="" alt="star" />
         </div>
      </div>
   )
}