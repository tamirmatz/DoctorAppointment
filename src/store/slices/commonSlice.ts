import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  isSplashScreen: boolean;
  commonModal: {
    isVisible: boolean
    text: {
      title: string,
      subTitle: string,
      btn: string,
    }
  }
}

const initialState: CommonState = {
  isSplashScreen: true,
  commonModal: {
    isVisible: false,
    text: {
      btn: '',
      subTitle: '', 
      title: '',
    }
  }
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsSplashScreen: (state, action: PayloadAction<boolean>) => {
      state.isSplashScreen = action.payload;
    },
    setCommonModal: (state, action: PayloadAction<{isVisible: boolean, btn: string, title: string, subTitle?: string}>) => {

      state.commonModal.text.btn = action.payload.btn;
      state.commonModal.text.title = action.payload.title;
      state.commonModal.isVisible = action.payload.isVisible;
      state.commonModal.text.subTitle = action.payload.subTitle ? action.payload.subTitle: '';
      
    },
    closeCommonModal: (state) => {
      state.commonModal.isVisible = false;
    },
  },
});

export const { setIsSplashScreen, setCommonModal, closeCommonModal} = commonSlice.actions;
export default commonSlice.reducer;
