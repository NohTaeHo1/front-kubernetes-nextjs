'use client'
import { findAllUsers } from "@/app/components/user/service/user.service";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function BoardDetailPage(props: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findBoardById(props.params.id));
  }, []);

  return (
    <>
      {props.params.id}번 게시판 상세
      <span>ID :</span>{" "}
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {" "}
        {props.params.id}
      </Typography>
      <span>게시판이름 :</span>{" "}
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {" "}
        {props.params.boardName}
      </Typography>
      <span>게시판타입 :</span>{" "}
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {" "}
        {props.params.boardType}
      </Typography>
      <span>등록일</span>{" "}
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {" "}
        {props.params.regDate}
      </Typography>
      <span>수정일</span>
      <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
        {" "}
        {props.params.modDate}
      </Typography>
    </>
  );
}

