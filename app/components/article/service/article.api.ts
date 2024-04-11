import { instance } from "@/app/components/common/configs/axios-config";

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

export const findArticleByIdAPI = async (id:any)=>{
  try{
    const response = await instance.get("/articles/detail", {
      params:{id}
    });
    return response.data;
  }catch(error){
    console.log(error);
    return error;}
}