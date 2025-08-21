import { Character, CharactersPageState } from "@/types/characterTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: CharactersPageState = {
  count: 0,
  pages: 0,
  next: null,
  prev: null,
  characters: [],
  currentCharacter: null,
  isModalOpen: false,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setPages: (state, action:PayloadAction<number>)=>{
      state.pages = action.payload
    },
    setNext: (state, action:PayloadAction<string | null>)=>{
      state.next= action.payload
    },
    setPrev: (state, action: PayloadAction<string | null >)=>{
      state.prev = action.payload
    },
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
    setCurrentCharacter: (state, action: PayloadAction<Character | null>) => {
      state.currentCharacter = action.payload;
    },
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const {
  setCount,
  setPages,
  setNext,
  setPrev,
  setCharacters,
  setCurrentCharacter,
  setIsModalOpen,
} = characterSlice.actions;
export const selectCharacter = (state: RootState): CharactersPageState =>
  state.character;
export default characterSlice.reducer;
