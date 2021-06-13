import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations.js';
// import { CSSTransition } from 'react-transition-group';
import authSelectors from '../../redux/auth/auth-selectors';
import Notification from '../../components/Notification/Notification';
import Spinner from '../../components/Spinner/Spinner';
import s from "./LoginPage.module.scss";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(authSelectors.getError);
  const isLoadingAuth = useSelector(authSelectors.getLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Questify</h2>
      <h3 className={s.text}>
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </h3>
      <h4 className={s.option}>Choose your name to sign up or log in</h4>

      <Notification message={error} />

      {isLoadingAuth && <Spinner />}
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        {/* <label htmlFor="email" className={s.formLabel}>
          Email
        </label> */}
        <input
          className={s.formInput}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        {/* <label htmlFor="password" className={s.formLabel}>
          Password
        </label> */}
        <input
          className={s.formInput}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className={s.formButton} type="submit">
          go!
        </button>
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  error: PropTypes.string,
  isLoadingAuth: PropTypes.bool,
};
