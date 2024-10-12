import { ModalState } from "@/constants/enums";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ModalState = {
  isOpen: false,
  title: "Modal title",
  content: "",
  buttons: null,
  className: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
      state.title = "";
      state.content = "";
      state.buttons = null;
      state.className = "";
    },
    openModal: (state, action: PayloadAction<ModalState>) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.buttons = action.payload.buttons;
      state.className = action.payload.className;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
