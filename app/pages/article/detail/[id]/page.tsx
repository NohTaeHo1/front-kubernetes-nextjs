"use client";
import { IArticle } from "@/app/components/article/model/article";
import { findArticleById } from "@/app/components/article/service/article.service";
import { getArticles } from "@/app/components/article/service/article.slice";
import { findAllUsers } from "@/app/components/user/service/user.service";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function articleDetailPage(props: any) {
  const dispatch = useDispatch();

  const allArticles:IArticle = useSelector(getArticles);



  useEffect(() => {
    dispatch(findArticleById(props.params.id));
  }, []);

  return (
    <>
      {props.id}번 게시글 상세
      <span>ID :</span>{props.id}
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {props.id}
      </Typography>
      {allArticles && (
        <>
          <span>게시글이름 :</span>{" "}
          <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
            {allArticles.title}
          </Typography>
          <span>게시글내용 :</span>{" "}
          <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
            {allArticles.content}
          </Typography>
          <span>등록일</span>{" "}
          <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
            {allArticles.regDate}
          </Typography>
          <span>수정일</span>
          <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
            {allArticles.modDate}
          </Typography>
        </>
      )}
    </>
  );
  
}