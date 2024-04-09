import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllBoardsAPI } from "./board.api";

export const findAllBoards: any = createAsyncThunk(
    'boards/findAllBoards',
    async (page:number)=>{
        console.log('findAllBoards page : '+ page)
        const data:any = await findAllBoardsAPI(1);
        const {message, result}:any = data
        return data
    }
)