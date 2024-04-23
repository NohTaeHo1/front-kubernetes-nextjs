import instance from "../../common/configs/axios-config";
import {IUser} from "../model/user";

export const findAllUsersAPI = async (page: any) => {
  try {
    const response = await instance.get("/users/list", {
      params: { page, limit: 10 },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const findUserByIdAPI = async (id: any) => {
  try {
    const response = await instance.get("/users/detail", {
      params: { id },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteByIdAPI = async (id:any)=>{
  try{
    const response = await instance.delete("/users/delete", {
      params:{id}
    })
    return response.data;
  }catch(error){return error}
}

export const modifyAPI = async (user:any)=>{
  try{
    const response = await instance.put("/users/modify", {
      params:{user}
    })
    return response.data;

  }catch(error){return error}
}

export const loginAPI = async (user:IUser)=>{
  try{
    const response = await instance.post("/users/login", user)
    return response.data;

  }catch(error){return error}
}

export const existsUsernameAPI = async (username:string)=>{
  try{
    const response = await instance.get("/users/exist-username", {params:{username}})
    return response.data;
    
  }catch(error){return error}
}

export const logoutAPI = async ()=>{
  try{
    const response = await instance.get("/users/logout", {params: {}})
    console.log('로그아웃 결과 : '+response.data)
    return response.data;
    
  }catch(error){return error}
}