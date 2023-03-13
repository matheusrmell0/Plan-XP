import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../configureStore';

// Reducer para controle global do estado do modal para mobile
const slice = createSlice({
  name: 'modal',
  initialState: {
    mobile: null,
  },
  reducers: {
    changeModal(state, action) {
      state.mobile = action.payload;
    },
  },
});

// Ações do reducer
const { changeModal } = slice.actions;

// Funcao para o menu mobile em estado global
export const changeMatch = (media: number) => (dispatch: AppDispatch) => {
  const { matches } = window.matchMedia(`(max-width: ${media}rem)`);
  dispatch(changeModal(matches));
};

export default slice.reducer;
