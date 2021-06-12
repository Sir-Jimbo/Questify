import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from '../Layout/Layout';
import Spinner from '../Spinner/Spinner';
import s from './App.module.css';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import authOperations from '../../redux/auth/auth-operations';

const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const DashboardPage = lazy(() => import('../../pages/DashboardPage/DashboardPage'))

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute
            exact
            path="/"
            restricted
            redirectTo="/dashboard"
            component={LoginPage} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/dashboard"
            component={RegisterPage} />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/dashboard"
            component={LoginPage} />
          <PrivateRoute
            path="/dashboard"
            //redirectTo="/login"
            component={DashboardPage}
          />
        </Switch>
      </Suspense>
    </Layout>
  );
}
