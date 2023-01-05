import { createSlice } from "@reduxjs/toolkit"

const initialState={
    showSideMenu: false,
}

const systemStateSlice = createSlice({
     name : "systemState",
        initialState,
        reducers: {
             setShowSideMenu: (state, {payload}) => {
                state.showSideMenu = payload;
             }
        }
})

const {reducer, actions} = systemStateSlice;
export const {setShowSideMenu} = actions;
export default reducer;