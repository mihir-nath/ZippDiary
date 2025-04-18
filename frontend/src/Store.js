
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { noteCreateReducer, noteDeleteReducer, noteListReducer, noteUpdateReducer } from './reducers/noteReducers';


const reducer = () => ({
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,
  noteList:noteListReducer,
  noteCreate:noteCreateReducer,
  noteUpdate:noteUpdateReducer,
  noteDelete:noteDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
  userLogin:{userInfo:userInfoFromStorage},
};

const store = configureStore({

    reducer: reducer(),
    initialState,
    middleware: [thunk]

});

export default store;