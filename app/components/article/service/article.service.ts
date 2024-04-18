import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllArticlesAPI, findArticleByIdAPI, saveAPI } from "./article.api";
import { IArticle } from "../model/article";

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
    'articles/datail/id',
    async (id: any)=>{
        const data:any = await findArticleByIdAPI(id);
        const {message, result}:any = data
        return data;
    }
)

export const save: any = createAsyncThunk(
    'articles',
    async (article:IArticle) =>{ 
        const data:any = await saveAPI(article)
        return data;}
)