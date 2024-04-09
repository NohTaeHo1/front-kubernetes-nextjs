"use client";
import { findArticleById } from "@/app/components/article/service/article.service";
import { getArticles } from "@/app/components/article/service/article.slice";
import { findAllUsers } from "@/app/components/user/service/user.service";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserDetailPage(props: any) {
  const dispatch = useDispatch();

  const allArticles = useSelector(getArticles);


  console.log(allArticles)


  useEffect(() => {
    dispatch(findArticleById(props.params.id));
  }, []);

  return (
    <>
      {props.params.id}번 게시글 상세
      <span>ID :</span>{props.params.id}
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {props.params.id}
      </Typography>
      <span>게시글이름 :</span>{" "}
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {allArticles}
        {allArticles.title}
      </Typography>
      <span>게시글내용 :</span>{" "}
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {" "}
        {allArticles.content}
      </Typography>
      <span>등록일</span>{" "}
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {" "}
        {allArticles.regDate}
      </Typography>
      <span>수정일</span>
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {" "}
        {allArticles.modDate}
      </Typography>
    </>
  );
}
