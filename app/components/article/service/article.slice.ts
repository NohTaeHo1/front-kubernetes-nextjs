import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './article.init';
import { findAllArticles, findArticleById } from './article.service';

const articleThunks = [findAllArticles, findArticleById]

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
        .addCase(findAllArticles.fulfilled, (state: any, {payload}: any) => ({...state, array: payload}))
        .addCase(findArticleById.fulfilled, (state: any, {payload}: any) => ({...state, array: payload}))
        // switch() case findAllArticles.fulfilled; handleFulfilled; break; 와 같음 (addCase = switchc case)
    }
})

export const getAllArticles = (state: any) => { //얘가 읽어오는 게터

    return state.article.array;//큰상태(state)의 
} // 꺼내주기

export const getArticles = (state: any) => ( //얘가 읽어오는 게터
 state.article.array)


export const {} = articleSlice.actions

export default articleSlice.reducer;