import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteByIdAPI, existsUsernameAPI, findAllUsersAPI, findUserByIdAPI, loginAPI, modifyAPI } from "./user.api";
import exp from "constants";
import { IUser } from "../model/user";

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


export const deleteById: any = createAsyncThunk(
    'users/delete',
    async (id: number) => await deleteByIdAPI(id)
)

export const modify: any = createAsyncThunk(
    'users/modify',
    async (user: any) => await modifyAPI(user)
)

export const login: any = createAsyncThunk(
    'users/login',
    async (user:IUser) => await loginAPI(user)
)

export const existsUsername: any = createAsyncThunk(
    'users/existsUsername',
    async (username:string) => {
        console.log("thunk에서 보낼 username : "+username)
        await existsUsernameAPI(username)}
)