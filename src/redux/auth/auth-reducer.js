import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
    email: null
};

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.userData,
    [authActions.logoutSuccess]: () => initialUserState,
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
    [authActions.logoutSuccess]: () => null
});


const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [authActions.registerError]: setError,
    [authActions.loginError]: setError,
    [authActions.logoutError]: setError,
    [authActions.getCurrentUserError]: setError,
    [authActions.clearError]: () => null,
});

const isAuthenticated = createReducer(false, {
    [authActions.registerSuccess]: () => true,
    [authActions.loginSuccess]: () => true,
    [authActions.getCurrentUserSuccess]: () => true,
    [authActions.registerError]: () => false,
    [authActions.loginError]: () => false,
    [authActions.getCurrentUserError]: () => false,
    [authActions.logoutSuccess]: () => false
});

const loading = createReducer(false, {
    [authActions.registerSuccess]: () => false,
    [authActions.registerRequest]: () => true,
    [authActions.registerError]: () => false,
    [authActions.loginSuccess]: () => false,
    [authActions.loginRequest]: () => true,
    [authActions.loginError]: () => false,
    [authActions.logoutRequest]: () => true,
    [authActions.logoutSuccess]: () => false,
    [authActions.logoutError]: () => false,
    [authActions.getCurrentUserRequest]: () => true,
    [authActions.getCurrentUserSuccess]: () => false,
    [authActions.getCurrentUserError]: () => false,
    [authActions.clearError]: () => false,
});

export default combineReducers({
    user,
    isAuthenticated,
    token,
    loading,
    error
});