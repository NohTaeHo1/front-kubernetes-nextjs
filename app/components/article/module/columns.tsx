import { Link, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { ArticleColumn } from "../model/article-columns";
import { MyTypography } from "../../common/style/cell";
import { PG } from "../../common/enums/PG";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../service/article.service";
import { useRouter } from "next/navigation";


interface CellType{
    row : ArticleColumn
}

export default function ArticleColumns(): GridColDef[]{

    const dispatch = useDispatch();
    const router = useRouter();
    
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

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'delete',
            headerName: 'DELETE',
            renderCell: ({ row }: CellType) =>
                <div style={{ cursor: "pointer" , textDecoration: "underline"}}
            className="btn underline-offset-4 
            focus:outline-none focus:ring focus:ring-violet-300
            overflow-hidden relative w-full h-full font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
            before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-300"
                    onClick={() => {
                        confirm("article을 삭제합니다.")
                    
                        dispatch(deleteArticle(row.id))
                        location.reload(); //새로고침
                    }
                    }> Delete</div>
                    
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modify',
            headerName: 'MODIFY',
            renderCell: ({ row }: CellType) =>
                <div style={{ cursor: "pointer" , textDecoration: "underline"}}
            className="btn underline-offset-4 
            focus:outline-none focus:ring focus:ring-violet-300
            overflow-hidden relative w-full h-full font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
            before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-300"
                    onClick={() => {
                        confirm("article을 수정합니다.")
                        router.push(`${PG.ARTICLE}/modify/${row.id}`)
                    }
                    }> Modify</div>
                    
        }
    ]
}