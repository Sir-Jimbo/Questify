import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section'
import Challenge from '../../components/Challenge/Challenge'
import Spinner from '../../components/Spinner/Spinner';
import operations from '../../redux/dashboard/dashboard-operations';
import Notification from '../../components/Notification/Notification';
import selectors from '../../redux/dashboard/dasboard-selectors';
import s from './DashboardPage.module.css';
import ButtonAddCard from '../../components/ButtonAddCard/ButtonAddCard';

export default function DashboardPage() {

   //const cards = useSelector(selectors.getAllCards);
   //const isLoadingCards = useSelector(selectors.getLoading);
   const error = useSelector(selectors.getError);
   //const dispatch = useDispatch();

   //useEffect(() => {
   //   dispatch(operations.fetchCards());
   //}, [dispatch]);

   const [editFormShow, setEditFormShow] = useState(false)

   return (
      <>

         <Header />
         <Section>
            {editFormShow
               ?
               <Challenge
                  handleHideCard={() => setEditFormShow(false)}
               />
               :
               <ButtonAddCard
                  onClick={() => setEditFormShow(true)}
               />
            }
         </Section>
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