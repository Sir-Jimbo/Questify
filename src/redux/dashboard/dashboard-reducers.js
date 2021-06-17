import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
   fetchCardsRequest,
   fetchCardsSuccess,
   fetchCardsError,
   addCardRequest,
   addCardSuccess,
   addCardError,
   deleteCardRequest,
   deleteCardSuccess,
   deleteCardError,
   changeFilter,
   clearError,
   onClickBtnCreate,
   editCard
} from './dashboard-actions';

const initialState = {
   cards: [],
   filter: '',
   loading: false,
   error: null,
};

const cards = createReducer(initialState.cards, {
   [fetchCardsSuccess]: (_, { payload }) => payload,
   [addCardSuccess]: (state, { payload }) => [...state, payload],
   [deleteCardSuccess]: (state, { payload }) =>
      state.filter(({ _id }) => _id !== payload),
});

const loading = createReducer(initialState.loading, {
   [fetchCardsRequest]: () => true,
   [fetchCardsSuccess]: () => false,
   [fetchCardsError]: () => false,
   [addCardRequest]: () => true,
   [addCardSuccess]: () => false,
   [addCardError]: () => false,
   [deleteCardRequest]: () => true,
   [deleteCardSuccess]: () => false,
   [deleteCardError]: () => false,
});

const filter = createReducer(initialState.filter, {
   [changeFilter]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(initialState.error, {
   [fetchCardsError]: setError,
   [addCardError]: setError,
   [deleteCardError]: setError,
   [clearError]: () => null,
});

const isVisibleTemplate = createReducer(false, {
   [onClickBtnCreate]: (_, { payload }) => payload,
});

const isEdit = createReducer(false, {
   [editCard]: (_, { payload }) => payload,
});

export default combineReducers({
   cards,
   filter,
   loading,
   error,
   isVisibleTemplate,
   isEdit
});