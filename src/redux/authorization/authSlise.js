import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, fetchCurrentUser } from './requestAPI';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signUp.fulfilled](state, { payload }) {
            if (payload === 400) {
                return;
            }
            state.user = {
                name: payload.user.name,
                email: payload.user.email,
            };
            state.token = payload.token;
            state.isLoggedIn = true;
            state.error = false;
        },

        [logIn.fulfilled](state, { payload }) {
            if (payload === 400) {
                return;
            }
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.error = false;
        },

        [logOut.fulfilled](state, { payload }) {
            if (payload === 401) {
                return;
            }
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.error = false;
        },

        [fetchCurrentUser.pending](state) {
            state.isLoggedIn = false;
            state.isRefreshing = true;
        },

        [fetchCurrentUser.fulfilled](state, { payload }) {
            if (payload === 401) {
                return;
            }
            state.user = payload;
            state.isLoggedIn = true;
            state.error = false;
            state.isLoading = false;
            state.isRefreshing = false;
        },
        [fetchCurrentUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});

export const authReduсer = authSlice.reducer;