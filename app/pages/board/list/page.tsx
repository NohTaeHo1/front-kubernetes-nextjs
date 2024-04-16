"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NextPage } from "next";
import { findAllBoards } from "@/app/components/board/service/board.service";
import { getAllBoards } from "@/app/components/board/service/board.slice";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import BoardColumns from "@/app/components/board/module/columns";
import Link from "next/link";
//import React from "react";

const boardsPage: NextPage = ({ data = [] }: any) => {
  const dispatch = useDispatch();
  const allboards: [] = useSelector(getAllBoards);

  useEffect(() => {
    dispatch(findAllBoards(1));
  }, []);

  const cards = [
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
  ];

  return (
    <>
      <table
        className="table-auto w-4/5 border-x-black"
        style={{ margin: "50px auto" }}
      >
        <thead>
          <tr>
            <td>
              <div className="flex flex-col items-center justify-center w-full bg-white-300">
                <div className="flex overflow-x-scroll snap-x snap-mandatory max-w-6xl no-scrollbar">
                  {cards.map((data, index) => {
                    return (
                      <section
                        className="flex-shrink-0 w-full snap-center justify-center items-center"
                        key={index}
                      >
                        <img
                          src={data}
                          alt="Images to scroll horizontal"
                          className="w-full h-[500px]"
                        />
                      </section>
                    );
                  })}
                </div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              align="center"
              className="w-full  bg-gray-400 border-black border-4 p-8 h-20 text-[20px]"
            >
              <Link href="/pages/article/save">게시판 글쓰기</Link>
            </td>
          </tr>
          <tr>
            <td align="center" className="h-300">
              {allboards && (
                <DataGrid
                  rows={allboards || []}
                  columns={BoardColumns()}
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
        </tbody>
      </table>
    </>
  );
};

export default boardsPage;
