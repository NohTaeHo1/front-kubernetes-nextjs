import instance from "@/app/components/common/configs/axios-config";
import { IArticle } from "../model/article";

export const findAllArticlesAPI = async (page: number) => {
  try {
    const response = await instance().get("/articles/list", {
      params: { page, limit: 10 },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}; // 이거 전체가 axios

export const findArticlesByBoardIdAPI = async (id: number) => {
  try {
    const response = await instance().get(`/articles/list/${id}`, {
      params: { id },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const saveAPI = async (article: IArticle) => {
  try {
    const response = await instance().post("/articles/save", article);
    console.log("article : " + JSON.stringify(article));
    console.log("response.data : " + response.data);
    return response.data;
  } catch (error) {
    return error;
  }


};
export const deleteArticleAPI = async (id: number) =>{
    try{
        const response = await instance().delete(`/articles/delete`,{params: {id}})
        console.log("response"+response)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
  }

  export const findAArticleByIdAPI = async (id: number) => {
    try {
      const response = await instance().get(`/articles/detail/${id}`, {
        params: { id },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  };

