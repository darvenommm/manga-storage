import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const mangaStorageSlice = createSlice({
  name: '@@mangaStorage',
  initialState,
  reducers: {
    addNewManga: (state, action) => {
      state.push({
        id: action.payload,
      });
    },
    removeManga: (state, action) => {
      return state.filter((manga) => manga.id !== action.payload);
    },
  },
});

export const { addNewManga, removeManga } = mangaStorageSlice.actions;

export const mangaStorageReducer = mangaStorageSlice.reducer;

export const selectManga = (state, id) => {
  return state.mangaStorage.find((manga) => manga.id === id);
};

export const selectAllManga = (state) => state.mangaStorage;
