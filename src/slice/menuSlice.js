import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants";
const initialState={
    activeMenuItem:MENU_ITEMS.PENCIL,
    actionMenuItem:null //undo ,redo
}
export const menuSlice=createSlice({
    name:'menu',
    initialState,
    reducers:{
        menuItemclick:(state,action)=>{
            state.activeMenuItem=action.payload
        },
        actionItemClick:(state,action)=>{
            state.actionMenuItem=action.payload
        }
    }
})

export const {menuItemclick,actionItemClick}=menuSlice.actions;
export default menuSlice.reducer;
