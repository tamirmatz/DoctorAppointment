// store.ts
import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import autheReducer from './slices/authSlice'
import commonReducer from './slices/commonSlice'
import appointmentsReducer from './slices/appointmentsSlice'



const store = configureStore({
  reducer: {
    auth: autheReducer,
    common: commonReducer,
    appointments: appointmentsReducer
  },
});

// Define the RootState and AppDispatch types based on the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
