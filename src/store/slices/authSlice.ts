import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
  clientPhone: string;
  clientName: string;
}

const initialState: AuthState = {
  isAuth: false,
  clientPhone: '',
  clientName: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setClientAuth: (state, action: PayloadAction<{isAuth: boolean, clientPhone: string, clientName: string}>) => {
      state.isAuth = action.payload.isAuth;
      state.clientPhone = action.payload.clientPhone;
      state.clientName = action.payload.clientName;
    }
    
  },
});

export const { setClientAuth} = authSlice.actions;
export default authSlice.reducer;
