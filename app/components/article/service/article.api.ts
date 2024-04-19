import { instance } from "@/app/components/common/configs/axios-config";
import { IArticle } from "../model/article";

export const findAllArticlesAPI = async (page: number) => {
  try {
    const response = await instance.get("/articles/list", {
      params: { page, limit: 10 },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}; // 이거 전체가 axios

export const findArticleByIdAPI = async (id: any) => {
  try {
    const response = await instance.get("/articles/detail/{id}", {
      params: { id },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const saveAPI = async (article: IArticle) => {
  try {
    const response = await instance.post("/articles/save", article);
    return response.data;
  } catch (error) {
    return error;
  }
};
