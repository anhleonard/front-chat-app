import { RawModalState } from '@/constants/enums';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RawModalState = {
  isOpen: false,
  className: '',
};

export const inforModalSlice = createSlice({
  name: 'inforModal',
  initialState,
  reducers: {
    closeInforModal: (state) => {
      state.isOpen = false;
      state.className = '';
    },
    openInforModal: (state, action: PayloadAction<RawModalState>) => {
      state.isOpen = true;
      state.className = action.payload.className;
    },
  },
});

export const { closeInforModal, openInforModal } = inforModalSlice.actions;

export default inforModalSlice.reducer;
