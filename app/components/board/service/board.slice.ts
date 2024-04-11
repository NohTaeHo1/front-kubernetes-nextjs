import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './board.init';
import { findAllBoards, findBoardById } from './board.service';

const boardThunks = [findAllBoards, findBoardById]

const status = {
    pending:'pending',
    fulfilled:'fulfilled',
    rejected:'rejected'
}

const handleFulfilled = (state:any, {payload}:any)=>{
    return {...state, array: payload};

}

const handlePending = (state: any) => {
  
}

const handleRejected = (state: any) => {
  
}

export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers:{},
    extraReducers: builder =>{
        const {pending, rejected} = status;

        builder.addCase(findAllBoards.fulfilled, handleFulfilled)
        .addCase(findBoardById.fulfilled, handleFulfilled)


    }

})

export const getAllBoards = (state:any)=>{return state.board.array;}
export const getBoardById = (state:any)=>(state.board.JSON)

export const {} = boardSlice.actions

export default boardSlice.reducer;