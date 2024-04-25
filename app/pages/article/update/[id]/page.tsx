"use client";

import { MyTypography } from "@/app/components/common/style/cell";
import { NextPage } from "next";
import { AttachFile, FmdGood, ThumbUpAlt } from "@mui/icons-material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { PG } from "@/app/components/common/enums/PG";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { save } from "@/app/components/article/service/article.service";
import { useRouter } from "next/navigation";
import { IArticle } from "@/app/components/article/model/article";
import { getAllBoards } from "@/app/components/board/service/board.slice";
import { findAllBoards } from "@/app/components/board/service/board.service";
import { IBoard } from "@/app/components/board/model/board";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { parseCookies } from "nookies";

const UpdateArticlePage: NextPage = ({id: any}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const dispatch = useDispatch();

  const handelCancel = () => {
    router.push(`${PG.ARTICLE}/list`);
  };

  useEffect(() => {
    dispatch(findAllBoards());
  }, []);

  const boardList: [] = useSelector(getAllBoards);

  console.log("boardList : " + boardList);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    dispatch(save(data))
      .then((res: any) => {
        alert(res.data.boardId);
        router.push("/pages/article/list")
      })
      .catch((err: any) => {
        //alert('error')
        router.push("/pages/article/list")
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          게시판 타입
        </label>

        <select
          defaultValue={1}
          {...register("boardId", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {boardList.map((i: IBoard) => (
            <option key={i.id} value={i.id} title={i.title}>
              {i.title}
            </option>
          ))}
        </select>
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          {MyTypography("Article 작성", "1.5rem")}
          <input
            type="hidden"
            value={jwtDecode<any>(parseCookies().accessToken).userId}
            readOnly
          />
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            placeholder="Title"
            type="text"
            {...register("title", { required: true })}
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            placeholder="Describe everything about this post here"
            {...register("content", { required: true, maxLength: 300 })}
          ></textarea>
          {/* <!-- icons --> */}
          <div className="icons flex text-gray-500 m-2">
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <ThumbUpAltIcon component={ThumbUpAlt}></ThumbUpAltIcon>
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <FmdGoodIcon component={FmdGood}></FmdGoodIcon>
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <AttachFileIcon component={AttachFile}></AttachFileIcon>
            </svg>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">
              0/300
            </div>
          </div>
          {/* <!-- buttons --> */}
          <div className="buttons flex">
            <input type="submit" value="SUBMIT" />
            <div
              className="btn  overflow-hidden relative w-30 bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
              onClick={handelCancel}
            >
              Cancel
            </div>
            {/* <div
              className="btn  overflow-hidden relative w-30 bg-blue-500 text-white p-3 px-8 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
            >
              {" "}
              Post{" "}
            </div> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateArticlePage;
