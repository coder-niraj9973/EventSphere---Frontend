import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        name: "nishant"
    },
    reducers: {
        toggleFavorites(state, action) {
            console.log(action);

        },
        removeFavorites(state) {

        },
        clearFavorites(state) {

        },
    }

})

export const { toggleFavorites, removeFavorites, clearFavorites } =
    favoriteSlice.actions                           //update the state

export default favoriteSlice.reducer                //connect with store