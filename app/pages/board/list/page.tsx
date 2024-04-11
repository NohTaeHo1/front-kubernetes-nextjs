"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NextPage } from "next";
import { findAllBoards } from "@/app/components/board/service/board.service";
import { getAllBoards } from "@/app/components/board/service/board.slice";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import BoardColumns from "@/app/components/board/module/columns";
//import React from "react";

const boardsPage: NextPage = ({ data = [] }: any) => {
  const dispatch = useDispatch();
  const allboards: [] = useSelector(getAllBoards);


  useEffect(() => {
    dispatch(findAllBoards(1));
  }, []);

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        {allboards && (
          <DataGrid
            rows={allboards || []}
            columns={BoardColumns()}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
          />
        )}
      </Box>
    </>
  );
};

export default boardsPage;