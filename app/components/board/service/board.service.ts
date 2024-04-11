import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllBoardsAPI, findBoardByIdAPI } from "./board.api";

export const findAllBoards: any = createAsyncThunk(
    'boards/findAllBoards',
    async (page:number)=>{
        console.log('findAllBoards page : '+ page)
        const data:any = await findAllBoardsAPI(1);
        const {message, result}:any = data
        return data
    }
)

export const findBoardById: any = createAsyncThunk(
    'boards/findBoardById',
    async (id: any)=>{
        const data:any = await findBoardByIdAPI(id);
        const {message, result}:any = data
        return data;
    });

