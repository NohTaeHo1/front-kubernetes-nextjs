'use client'
import { IUser } from "@/app/components/user/model/user";
import { findUserById } from "@/app/components/user/service/user.service";
import { getAllUsers } from "@/app/components/user/service/user.slice";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"


export default function UserDetail({params}:any){

    const dispatch = useDispatch()
    const user:IUser = useSelector(getAllUsers)

    useEffect(()=>{dispatch(findUserById(params.id))}, [])

  function deleteHandle(e:any) {

    
  }

    return (<>
        {user.name}님 상세 정보
        <span>ID :</span>
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {params.id}
        </Typography>
        {user && (
          <>
            <span>아이디 :</span>{" "}
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
              {user.id}
            </Typography>
            <span>이름 :</span>{" "}
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
              {user.name}
            </Typography>
            <span>비밀번호 :</span>{" "}
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
              {user.password}
            </Typography>
            <span>전화번호</span>
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
              {user.phone}
            </Typography>
            <span>직업</span>
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
              {user.job}
            </Typography>
            <span>이메일</span>
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
              {user.email}
            </Typography>
            <span>등록일</span>
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
              {user.regDate}
            </Typography>
            <span>수정일</span>
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
              {user.modDate}
            </Typography><br />

            <button onClick = {deleteHandle}> 삭제 </button>
          </>
        )}
      </>)
}