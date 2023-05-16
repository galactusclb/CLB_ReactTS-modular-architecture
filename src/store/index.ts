import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

import authSlice from "./authSlice"


const createPersistedReducer = (key: string, reducer: any) => {
    const persistConfig = {
        key,
        storage,
    }
    return persistReducer(persistConfig, reducer);
}


const persistedAuthReducer = createPersistedReducer('auth', authSlice);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        //   cart: persistedCartReducer,
        //   todos: todosReducer,
        //   control: controlReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST']
        }
    })
})


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>

export default store;