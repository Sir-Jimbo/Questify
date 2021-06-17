
import { createAction } from '@reduxjs/toolkit';


export const fetchCardsRequest = createAction('cards/fetchCardsRequest');
export const fetchCardsSuccess = createAction('cards/fetchCardsSuccess');
export const fetchCardsError = createAction('cards/fetchCardsError');

export const addCardRequest = createAction('cards/addCardRequest');
export const addCardSuccess = createAction('cards/addCardSuccess');
export const addCardError = createAction('cards/addCardError');

export const updateCardRequest = createAction('cards/updateCardRequest');
export const updateCardSuccess = createAction('cards/updateCardSuccess');
export const updateCardError = createAction('cards/updateCardError');
export const updateCardStatusDoneRequest = createAction('cards/updateCardStatusDoneRequest');
export const updateCardStatusDoneSuccess = createAction('cards/updateCardStatusDoneSuccess');
export const updateCardStatusDoneError = createAction('cards/updateCardStatusDoneError');

export const deleteCardRequest = createAction('cards/deleteContactRequest');
export const deleteCardSuccess = createAction('cards/deleteContactSuccess');
export const deleteCardError = createAction('cards/deleteContactError');


export const changeFilter = createAction('cards/changeFilter');

export const clearError = createAction('cards/clearError');

export const onClickBtnCreate = createAction('onClickBtnCreate');

export const editCard = createAction('editCard');