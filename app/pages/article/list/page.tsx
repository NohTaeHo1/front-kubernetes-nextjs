"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NextPage } from "next";
import { findAllArticles } from "@/app/components/article/service/article.service";
import { getAllArticles } from "@/app/components/article/service/article.slice";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import articleColumns from "@/app/components/article/module/columns";
import { useRouter } from "next/navigation";
import ArticleColumns from "@/app/components/article/module/columns";

export default function ArticlesPage() {
  const dispatch = useDispatch();
  
  const allArticles: [] = useSelector(getAllArticles);

  // if (allArticles !== undefined) {
  //   console.log("allArticles is not undefined");

  //   console.log("length is " + allArticles.length);
  //   for (let i = 0; i < allArticles.length; i++) {
  //     console.log(JSON.stringify(allArticles[i]));
  //   }
  // } else {
  //   console.log("allArticles is undefined");
  // }

  useEffect(() => {
    dispatch(findAllArticles(1));
  }, []);

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        {allArticles && (
          <DataGrid
            rows={allArticles}
            columns={ArticleColumns()}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        )}
      </Box>
    </>
  );
}
