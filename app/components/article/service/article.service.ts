import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllArticlesAPI, findArticleByIdAPI } from "./article.api";

export const findAllArticles: any = createAsyncThunk(
    'articles/findAllArticles',
    async (page: number)=>{
        console.log('findAllArticles page : '+ page)
        const data:any = await findAllArticlesAPI(1); // 이름은 자유. axios임. 서버와의 통신 기능

        const {message, result}:any = data
        return data
    }
)

export const findArticleById: any = createAsyncThunk(
    'articles/id',
    async (id: any)=>{
        const data:any = await findArticleByIdAPI(id);
        const {message, result}:any = data
        return data;
    }
)