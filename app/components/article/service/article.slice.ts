import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './article.init';
import { findAArticleById, findAllArticles, findArticlesByBoardId, save } from './article.service';
import { findArticlesByBoardIdAPI } from "./article.api";

const articleThunks = [findAllArticles, findArticlesByBoardId, save, findAArticleById]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


const handlePending = (state: any) => {
  
}

const handleRejected = (state: any) => {
  
}


export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllArticles.fulfilled, (state: any, {payload}: any) => ({...state, JSON: payload}))
        .addCase(findArticlesByBoardId.fulfilled, (state: any, {payload}: any) => ({...state, array: payload}))
        .addCase(save.fulfilled, (state: any, {payload}: any) => ({...state, array: payload}))
        // switch() case findAllArticles.fulfilled; handleFulfilled; break; 와 같음 (addCase = switchc case)
        .addCase(findAArticleById.fulfilled, (state: any, {payload}: any) => ({...state, JSON: payload}))
    }
})

export const getAllArticles = (state: any) => { //얘가 읽어오는 게터
    return state.article.array;//큰상태(state)의 
} // 꺼내주기
export const getArticles = (state: any) => ( //얘가 읽어오는 게터
 state.article.array)
export const getArticlesById = (state : any)=>(state.article.array)
export const getAArticleDetail = (state : any)=>(state.article.JSON)

export const {} = articleSlice.actions

export default articleSlice.reducer;