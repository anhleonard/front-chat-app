import { RawModalState } from '@/constants/enums';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RawModalState = {
  isOpen: false,
  className: '',
};

export const chatModalSlice = createSlice({
  name: 'chatModal',
  initialState,
  reducers: {
    closeChatModal: (state) => {
      state.isOpen = false;
      state.className = '';
    },
    openChatModal: (state, action: PayloadAction<RawModalState>) => {
      state.isOpen = true;
      state.className = action.payload.className;
    },
  },
});

export const { closeChatModal, openChatModal } = chatModalSlice.actions;

export default chatModalSlice.reducer;
