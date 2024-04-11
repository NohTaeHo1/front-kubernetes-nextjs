import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI, findUserByIdAPI } from "./user.api";

export const findAllUsers: any = createAsyncThunk(
    'users/findAllUsersAPI',
    async (page:number)=>{
        console.log('fetchAllUsers page : '+ page)
        const data:any = await findAllUsersAPI(page);
        const {message, result}:any = data
        return data
    }
)

export const findUserById: any = createAsyncThunk(
    'users/findUserById',
    async (id: number) => await findUserByIdAPI(id))