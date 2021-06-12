
import { createAction } from '@reduxjs/toolkit';


export const fetchCardsRequest = createAction('cards/fetchCardsRequest');
export const fetchCardsSuccess = createAction('cards/fetchCardsSuccess');
export const fetchCardsError = createAction('cards/fetchCardsError');

export const addCardRequest = createAction('cards/addCardRequest');
export const addCardSuccess = createAction('cards/addCardSuccess');
export const addCardError = createAction('cards/addCardError');

export const deleteContactRequest = createAction('cards/deleteContactRequest');
export const deleteContactSuccess = createAction('cards/deleteContactSuccess');
export const deleteContactError = createAction('cards/deleteContactError');


export const changeFilter = createAction('cards/changeFilter');

export const clearError = createAction('cards/clearError');