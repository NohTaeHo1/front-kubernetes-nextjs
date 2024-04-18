'use client'

import CardButton from "@/app/atom/button/CardButton";
import { IBoard } from "@/app/components/board/model/board";
import { findAllBoards } from "@/app/components/board/service/board.service";
import { getAllBoards } from "@/app/components/board/service/board.slice";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"

export default function BoardCards(){
    
    const dispatch = useDispatch();
    const allBoards = useSelector(getAllBoards);

    useEffect(()=>{
        dispatch(findAllBoards(1))
    }, [])

    return(<>

    <h1>게시판 목록 자리</h1>

    {allBoards.map((board:IBoard)=>(<CardButton id={board.id} title={board.title} description={board.description} />))}
    
    
    </>)
}