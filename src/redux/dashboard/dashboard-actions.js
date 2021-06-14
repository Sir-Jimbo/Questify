
import { createAction } from '@reduxjs/toolkit';


export const fetchCardsRequest = createAction('cards/fetchCardsRequest');
export const fetchCardsSuccess = createAction('cards/fetchCardsSuccess');
export const fetchCardsError = createAction('cards/fetchCardsError');

export const addCardRequest = createAction('cards/addCardRequest');
export const addCardSuccess = createAction('cards/addCardSuccess');
export const addCardError = createAction('cards/addCardError');

export const deleteCardRequest = createAction('cards/deleteContactRequest');
export const deleteCardSuccess = createAction('cards/deleteContactSuccess');
export const deleteCardError = createAction('cards/deleteContactError');


export const changeFilter = createAction('cards/changeFilter');

export const clearError = createAction('cards/clearError');