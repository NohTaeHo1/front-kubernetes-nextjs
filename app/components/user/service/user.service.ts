import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI } from "./user.api";

export const findAllUsers: any = createAsyncThunk(
    'users/findAllUsersAPI',
    async (page:number)=>{
        console.log('fetchAllUsers page : '+ page)
        const data:any = await findAllUsersAPI(1);
        const {message, result}:any = data
        return data
    }
)