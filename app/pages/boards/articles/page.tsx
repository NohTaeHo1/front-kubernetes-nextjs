"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NextPage } from "next";
import { fetchAllArticles } from "@/redux/features/articles/article.service";
import { getAllArticles } from "@/redux/features/articles/article.slice";
import { IArticle } from "@/redux/features/articles/article.model";
import Columns from "@/app/components/articles/columns";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
//import React from "react";


const ArticlesPage: NextPage = ({data}:any) => {
  const dispatch = useDispatch();
  const allArticles: [] = useSelector(getAllArticles);

  if (allArticles !== undefined) {
    console.log("allArticles is not undefined");

    console.log("length is " + allArticles.length);
    for (let i = 0; i < allArticles.length; i++) {
      console.log(JSON.stringify(allArticles[i]));
    }
  } else {
    console.log("allArticles is undefined");
  }

  useEffect(() => {
    dispatch(fetchAllArticles(1));
  }, []);

  return (
    <>
       <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={Columns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5, // 한페이지에 보여주는 행의 수
            },
          },
        }}
        pageSizeOptions={[3,5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
  );
};

export default ArticlesPage;
