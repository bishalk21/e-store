import {configureStore} from '@reduxjs/toolkit';
import adminUserReducer from './pages/admin-login/admin-reducer-action/adminUserSlice';


const store = configureStore({
    reducer: {
        adminUser: adminUserReducer,
    }
})

export default store;