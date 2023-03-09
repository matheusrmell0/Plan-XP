import { createSlice } from '@reduxjs/toolkit';

// Reducer para controle global do estado do modal para mobile
const slice = createSlice({
  name: 'modal',
  initialState: {
    modal: false,
  },
  reducers: {
    openModal(state) {
      state.modal = true;
    },
    closeModal(state) {
      state.modal = false;
    },
  },
});

// Ações do reducer
export const { openModal, closeModal } = slice.actions;

export default slice.reducer