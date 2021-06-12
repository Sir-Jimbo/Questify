import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';
import operations from '../../redux/phonebook/phonebook-operations';
import Notification from '../../components/Notification/Notification';
import selectors from '../../redux/phonebook/phonebook-selectors';
import s from './DashboardPage.module.css';

export default function DashboardPage() {
   //const cards = useSelector(selectors.getAllCards);
   //const isLoadingCards = useSelector(selectors.getLoading);
   const error = useSelector(selectors.getError);
   //const dispatch = useDispatch();

   //useEffect(() => {
   //   dispatch(operations.fetchCards());
   //}, [dispatch]);

   return (
      <>
         <Header />
         <Notification message={error} />

      </>
   )
}

DashboardPage.propTypes = {
   cards: PropTypes.arrayOf(PropTypes.object),
   fetchCards: PropTypes.func,
   isLoadingCards: PropTypes.bool,
   error: PropTypes.string
};