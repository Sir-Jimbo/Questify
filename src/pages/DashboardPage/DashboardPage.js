import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import Challenge from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import operations from "../../redux/auth/auth-operations";
import { onClickBtnCreate } from '../../redux/dashboard/dashboard-actions';
import Notification from "../../components/Notification/Notification";
import selectors from "../../redux/dashboard/dasboard-selectors";
import s from "./DashboardPage.module.css";
import ButtonAddCard from "../../components/ButtonAddCard/ButtonAddCard";
import CardsList from "../../components/CardsList/CardList";
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button';
import DashboardList from '../../components/DashboardList/DashboardList';

export default function DashboardPage() {

   const dispatch = useDispatch();

   const edit = useSelector(selectors.isEditCard);
   const isVisible = useSelector(selectors.isVisibleCard);
   const onClick = () => {
      /*setTimeout(() => {
         dispatch(operations.getCurrentUser());
      }, 1000);

      if (edit) {
         //console.log('Закончить редактирование карточки');
         toast.warning('Finish editing the card');
         return;
      }
      if (isVisible) {
         //console.log('Закончить создание карточки');
         toast.warning('Finish card creation');
         return;
      }*/
      dispatch(onClickBtnCreate(true));
   };

   return (
      <>
         <Header />
         <Section>
            <DashboardList />
         </Section>
         <Button content="icon-plus" type="button" onClick={onClick} />
         {/*<Notification message={error} />*/}
      </>
   );
}

DashboardPage.propTypes = {
   cards: PropTypes.arrayOf(PropTypes.object),
   fetchCards: PropTypes.func,
   isLoadingCards: PropTypes.bool,
   error: PropTypes.string,
};
