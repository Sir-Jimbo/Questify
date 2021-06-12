import React from 'react';
import s from './Login.module.css';


const Login = ({ name }) => {
   return (
      <div className={s.login}>
         <p className={s.avatar}>J</p>
         <p className={s.text}>{name} Quest Log</p>
      </div>
   )
}

export default Login