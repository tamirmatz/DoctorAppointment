import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppointmentsState {
  currentField: {name: string, id: number} | null;
}

const initialState: AppointmentsState = {
  currentField: null,
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {

    setCurrentField: (state, action: PayloadAction<{name: string, id: number}>) => {
      state.currentField = action.payload;
    },
  },
});

export const { setCurrentField } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
