import React, { useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as dashboardActions from '../../redux/dashboard/dashboard-actions';
import selectors from '../../redux/dashboard/dasboard-selectors';
import authSelectors from '../../redux/auth/auth-selectors';
import authActions from '../../redux/auth/auth-actions';
import { useSelector, useDispatch } from 'react-redux';
import s from './Notification.module.css';

export default function Notification({ message }) {
   const dispatch = useDispatch();
   const errorPb = useSelector(selectors.getError);
   const errorAuth = useSelector(authSelectors.getError);
   const clearErrorPb = useCallback(() => dispatch(dashboardActions.clearError()), [dispatch]);
   const clearErrorAuth = useCallback(() => dispatch(authActions.clearError()), [dispatch]);


   useEffect(() => {
      setTimeout(() => {
         clearErrorAuth();
      }, 2500);
   }, [errorAuth, clearErrorAuth]);


   useEffect(() => {
      setTimeout(() => {
         clearErrorPb();
      }, 2500);
   }, [errorPb, clearErrorPb]);

   return (
      <CSSTransition
         in={message}
         timeout={250}
         classNames={s}
         unmountOnExit
      >
         <div className={s.overlay} >
            <p className={s.message}>
               {message}
            </p>
         </div>
      </CSSTransition>
   );
};