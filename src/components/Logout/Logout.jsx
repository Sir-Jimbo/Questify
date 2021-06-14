import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Logout.module.css';
import sprite from '../../images/sprite.svg';
import authSelectors from '../../redux/auth/auth-selectors';


export default function Logout({ onClick }) {
   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
   return (
      <>
         {isLoggedIn
            ? <svg onClick={onClick} width="22" height="16">
               <use className={s.icon} href={sprite + "#icon - logout"}></use>
            </svg>
            : null
         }
      </>
   )
}