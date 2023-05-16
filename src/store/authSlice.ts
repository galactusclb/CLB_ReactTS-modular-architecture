import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDoc {
    _id?: string;
    userName?: string;
    email?: string,
    role?: string;
}

export interface AuthState {
    userDoc?: UserDoc | null;
    refreshToken?: string | null;
    accessToken?: string | null;
}

const initialState: AuthState = {
    userDoc: null,
    refreshToken: null,
    accessToken: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<AuthState>) {

            const { userDoc, refreshToken, accessToken } = action.payload;

            state.userDoc = userDoc;
            state.refreshToken = refreshToken;
            state.accessToken = accessToken;
        },
        logout(state) {
            state.userDoc = null;
            state.refreshToken = null;
            state.accessToken = null;
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer