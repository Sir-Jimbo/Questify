import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { CSSTransition } from 'react-transition-group';
import authSelectors from '../../redux/auth/auth-selectors';
import Notification from '../../components/Notification/Notification';
import Spinner from '../../components/Spinner/Spinner';
import s from './RegisterPage.module.css'

export default function RegisterPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(authSelectors.getError);
  const isLoadingAuth = useSelector(authSelectors.getLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default: console.warn(`Тип поля name - ${name} не обрабатывается!`);
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        <h1 className={s.Title}>Enter your data</h1>
      </CSSTransition>

      <Notification
        message={error}
      />

      {isLoadingAuth && <Spinner />}

      <form
        onSubmit={handleSubmit}
        className={s.form}
        autoComplete="off"
      >
        <label
          htmlFor="name"
          className={s.label}>
          Name</label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label
          htmlFor="email"
          className={s.label}>
          Email</label>
        <input
          className={s.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />


        <label
          htmlFor="password"
          className={s.label}>
          Password</label>
        <input
          className={s.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />


        <button
          className={s.button}
          type="submit">Sign up</button>
      </form>
    </div>
  );
}


RegisterPage.propTypes = {
  error: PropTypes.string,
  isLoadingAuth: PropTypes.bool,
};