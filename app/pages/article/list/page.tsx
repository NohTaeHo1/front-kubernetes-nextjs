"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findAllArticles } from "@/app/components/article/service/article.service";
import { getAllArticles } from "@/app/components/article/service/article.slice";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import ArticleColumns from "@/app/components/article/module/columns";
import { NextPage } from "next";

const ArticleListPage: NextPage = () => {
  const dispatch = useDispatch();
  
  const allArticles: [] = useSelector(getAllArticles);

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

export default ArticleListPage