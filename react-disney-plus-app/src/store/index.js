import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage"
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore} from "redux-persist";

const rootReducer = combineReducers({
    user : userReducer
})
const persistConfig = {
    key : "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // reducer : {
    //     user : userReducer
    // }
    reducer : persistedReducer,
    // redux-persist를 사용할 때 action을 dispatch할 때만 직렬화를 false 처리
    middleware:(getDefaultMiddleware) => getDefaultMiddleware(
        {serializableCheck : 
            {
                ignoredActions : [FLUSH, REHYDRATE,PAUSE,PERSIST, PURGE, REGISTER]
            }
        }
    ) 
})

export const persistor = persistStore(store)