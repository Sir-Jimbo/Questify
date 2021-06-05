import React, { useEffect, Suspense, lazy } from 'react';
//import { Switch } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import s from './App.module.css'

//const DashboardPage = lazy(() => import('../../pages/DashboardPage/DashboardPage'))

export default function App() {
  // const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <Layout>
        Hello
    </Layout>
    </div>
  );
}
