'use client'
import { IBoard } from "@/app/components/board/model/board";
import { findBoardById } from "@/app/components/board/service/board.service";
import { getBoardById } from "@/app/components/board/service/board.slice";
import { Typography } from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BoardDetail({params}:any){

  const dispatch = useDispatch();
  const board:IBoard = useSelector(getBoardById)

  useEffect(()=>{
    dispatch(findBoardById(params.id))
  }, [])

  return (<>
    {params.id}번 게시글 상세
    <span>ID :</span>{params.id}
    <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
      {params.id}
    </Typography>
    {board && (
      <>
        <span>게시판이름 :</span>{" "}
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {board.boardName}
        </Typography>
        <span>게시판타입 :</span>{" "}
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {board.boardType}
        </Typography>
        <span>등록일</span>{" "}
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {board.regDate}
        </Typography>
        <span>수정일</span>
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {board.modDate}
        </Typography>
      </>
    )}
  </>)
}

