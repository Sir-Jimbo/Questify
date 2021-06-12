import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
   fetchCardsRequest,
   fetchCardsSuccess,
   fetchCardsError,
   addCardRequest,
   addCardSuccess,
   addCardError,
   deleteContactRequest,
   deleteContactSuccess,
   deleteContactError,
   changeFilter,
   clearError
} from './phonebook-actions';

const initialState = {
   cards: [],
   filter: '',
   loading: false,
   error: null,
};

const cards = createReducer(initialState.cards, {
   [fetchCardsSuccess]: (_, { payload }) => payload,
   [addCardSuccess]: (state, { payload }) => [...state, payload],
   [deleteContactSuccess]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
});

const loading = createReducer(initialState.loading, {
   [fetchCardsRequest]: () => true,
   [fetchCardsSuccess]: () => false,
   [fetchCardsError]: () => false,
   [addCardRequest]: () => true,
   [addCardSuccess]: () => false,
   [addCardError]: () => false,
   [deleteContactRequest]: () => true,
   [deleteContactSuccess]: () => false,
   [deleteContactError]: () => false,
});

const filter = createReducer(initialState.filter, {
   [changeFilter]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(initialState.error, {
   [fetchCardsError]: setError,
   [addCardError]: setError,
   [deleteContactError]: setError,
   [clearError]: () => null,
});

export default combineReducers({
   cards,
   filter,
   loading,
   error
});