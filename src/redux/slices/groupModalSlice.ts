import { RawModalState } from '@/constants/enums';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RawModalState = {
  isOpen: false,
  className: '',
};

export const groupModalSlice = createSlice({
  name: 'groupModal',
  initialState,
  reducers: {
    closeGroupModal: (state) => {
      state.isOpen = false;
      state.className = '';
    },
    openGroupModal: (state, action: PayloadAction<RawModalState>) => {
      state.isOpen = true;
      state.className = action.payload.className;
    },
  },
});

export const { closeGroupModal, openGroupModal } = groupModalSlice.actions;

export default groupModalSlice.reducer;
