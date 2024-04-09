import { Link, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { ArticleColumn } from "../model/article-columns";
import { MyTypography } from "../../common/style/cell";
import { PG } from "../../common/enums/PG";


interface CellType{
    row : ArticleColumn
}

export default function ArticleColumns(): GridColDef[]{
    
    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'ID',
            renderCell: ({row}:CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>
                <Link href={`${PG.ARTICLE}/detail/${row.id}`} className="underline" > {row.id} </Link>
                </Typography>            
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'title',
            headerName: '제목',
            renderCell: ({row}:CellType) => MyTypography(row.title, '1.2rem')

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'content',
            headerName: '내용',
            renderCell: ({row}:CellType) => MyTypography(row.content, '1.2rem')

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'writerId',
            headerName: '작성자',
            renderCell: ({row}:CellType) => MyTypography(row.writerId, '1.2rem')

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardId',
            headerName: '등록게시판',
            renderCell: ({row}:CellType) => MyTypography(row.boardId, '1.2rem')

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