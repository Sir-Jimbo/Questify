import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Logo from '../Logo/Logo';
import Login from '../Login/Login';
import Logout from '../Logout/Logout'
import s from './Header.module.scss';


export default function Header() {

   const dispatch = useDispatch();
   const name = useSelector(authSelectors.getUsername);
   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

   const onLogOut = useCallback(() => {
      dispatch(authOperations.logOut());
   }, [dispatch]);

   return (
      <>
         <header className={s.container}>
            <Logo />
            <Login name={name} />
            <Logout onClick={onLogOut} />
         </header>

      </>
   )
}