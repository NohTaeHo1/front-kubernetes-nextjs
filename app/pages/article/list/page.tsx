"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findAllArticles, findArticlesByBoardId } from "@/app/components/article/service/article.service";
import { getAllArticles } from "@/app/components/article/service/article.slice";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import ArticleColumns from "@/app/components/article/module/columns";
import { NextPage } from "next";
import MoveButton from "@/app/atom/button/MoveButton";
import { PG } from "@/app/components/common/enums/PG";

const ArticleListPage: NextPage = () => {

  const dispatch = useDispatch();

  const allArticles: [] = useSelector(getAllArticles);

  useEffect(() => {

    dispatch(findAllArticles());
  }, []);

  return (
    <>
      <table
        className="table-auto w-4/5 border-x-black"
        style={{ margin: "50px auto" }}
      >
        <tbody>
          <tr>
            <td
              align="center"
              className="w-full  bg-gray-400 border-black border-4 p-8 h-20 text-[20px]"
            >
              게시글 목록 2
            </td>
          </tr>
          <tr>
            <td align="center" className="h-300">
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
            </td>
          </tr>
          <td>
            <button>수정</button>
          </td>
          <td>
            <button>삭제</button>
          </td>
          <thead>
            <tr>
              <td colSpan={3}>
                <MoveButton text={"글쓰기"} path={`${PG.ARTICLE}/save`} />
              </td>
            </tr>
          </thead>
        </tbody>
      </table>
    </>
  );
};

export default ArticleListPage;
