import { createSlice } from "@reduxjs/toolkit";
import { findAllBoards, findBoardById } from './board.service';
import { IBoard } from "../model/board";

const boardThunks = [findAllBoards, findBoardById]

interface BoardState{
    json: IBoard
    array: Array<IBoard>
}

export const initialState: BoardState = {
    json: {} as IBoard,
    array: []
  };

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

        builder
        .addCase(findAllBoards.fulfilled, (state:any, {payload}:any)=>({...state, array: payload}))
        .addCase(findBoardById.fulfilled, handleFulfilled)


    }

})

export const getAllBoards = (state:any)=>{return state.board.array;}
export const getSingleBoard = (state:any)=>(state.board.JSON)

export const {} = boardSlice.actions

export default boardSlice.reducer;