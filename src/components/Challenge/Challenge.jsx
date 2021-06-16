import React from 'react';
import s from './Challenge.module.scss';

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
         <div className={s.task}>
            <p>Create New Quest</p>
            <p>Today</p>
         </div>
         <div className={s.bottom}>
            <div className={s.group}>group</div>
            <div className={s.clear}>x</div>
            <div className={s.start}>START</div>
         </div>
      </div>
   )
}