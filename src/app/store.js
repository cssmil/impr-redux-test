import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../slices/counterSlice'
import { pokeSlice } from '../slices/pokeSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    page: pokeSlice.reducer,
    pokemons: pokeSlice.reducer,
    isLoading: pokeSlice.reducer,
  },
})