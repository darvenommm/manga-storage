import { createSlice } from '@reduxjs/toolkit';
import { isValidTheme } from '../helpers/isValidTheme';

import { THEME_VALUES } from '../../../shared/constants/themeValues';
const { dark } = THEME_VALUES;

const initialState = dark;

const themeSlice = createSlice({
  name: '@@theme',
  initialState,
  reducers: {
    setNewTheme: (state, action) => {
      if (isValidTheme) {
        return action.payload;
      }

      return state;
    },
  },
});

export const themeReducer = themeSlice.reducer;

export const { setNewTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme;
