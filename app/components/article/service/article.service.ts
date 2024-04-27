import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteArticleAPI, findAArticleByIdAPI, findAllArticlesAPI, findArticlesByBoardIdAPI, saveAPI } from "./article.api";
import { IArticle } from "../model/article";

export const findAllArticles: any = createAsyncThunk(
  "articles/findAllArticles",
  async (page: number) => {
    console.log("findAllArticles page : " + page);
    const data: any = await findAllArticlesAPI(1); // 이름은 자유. axios임. 서버와의 통신 기능

    const { message, result }: any = data;
    return data;
  }
);

export const findArticlesByBoardId: any = createAsyncThunk(
  "articles/list/id",
  async (id: any) => {
    console.log("findArticleById id : " + id);
    const data: any = await findArticlesByBoardIdAPI(id);
    const { message, result }: any = data;
    return data;
  }
);

export const save: any = createAsyncThunk(
  "articles/save",
  async (article: IArticle) => {
    console.log("articleThunk : "+JSON.stringify(article))
    const data: any = await saveAPI(article);
    console.log("data : "+data)
    
    return data;
  }
);

export const deleteArticle: any = createAsyncThunk(
  'articles/deleteById',
  async (id: number)=> {
    const data: any = await deleteArticleAPI(id)
  return data})

  export const findAArticleById: any = createAsyncThunk(
    "articles/detail/id",
    async (id: any) => {
      const data: any = await findAArticleByIdAPI(id);
      const { message, result }: any = data;
      return data;
    }
  );
