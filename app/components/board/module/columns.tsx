import { Link, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { BoardColumn } from "../model/board-columns";
import { MyTypography } from "../../common/style/cell";
import { PG } from "../../common/enums/PG";


interface CellType{
    row : BoardColumn
}

export default function BoardColumns(): GridColDef[]{
    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'ID',
            renderCell: ({row}:CellType) => MyTypography(row.id, '1.2rem')
            
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardName',
            headerName: '제목',
            renderCell: ({row}:CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>
                <Link href={`${PG.BOARD}/detail/${row.id}`} className="underline" > {row.title} </Link>
                </Typography>            
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardType',
            headerName: '내용',
            renderCell: ({row}:CellType) => MyTypography(row.description, '1.2rem')

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'regDate',
            headerName: '등록일',
            renderCell: ({row}:CellType) => MyTypography(row.regDate, '1.2rem')

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modDate',
            headerName: '수정일',
            renderCell: ({row}:CellType) => MyTypography(row.modDate, '1.2rem')

        }
    ]
}