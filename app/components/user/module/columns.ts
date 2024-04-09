import { GridColDef } from "@mui/x-data-grid";
import { MyTypography } from "../../common/style/cell";
import { PG } from "../../common/enums/PG";
import { Link, Typography } from "@mui/material";
import { UserColumn } from "../model/user-columns";

interface CellType{
    row : UserColumn
}

export default function UserColumns(): GridColDef[]{
  return [
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'id',
        headerName: 'No.',
        renderCell: ({row}:CellType) =>  MyTypography(row.id, "1.2rem")
        }
    ,
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'username',
        headerName: '이름',
        renderCell: ({row}:CellType) =>   MyTypography(row.username, "1.2rem")
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'password',
        headerName: '비밀번호',
        renderCell: ({row}:CellType) =>   MyTypography(row.password, "1.2rem")
    },
    {
      flex: 0.04,
      minWidth: 30,
      sortable: false,
      field: 'email',
      headerName: '메일',
      renderCell: ({row}:CellType) =>   MyTypography(row.email, "1.2rem")
  },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'name',
        headerName: '이름',
        renderCell: ({row}:CellType) =>   MyTypography(row.name, "1.2rem")
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'phone',
        headerName: '전화번호',
        renderCell: ({row}:CellType) =>   MyTypography(row.phone, "1.2rem")
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'job',
        headerName: '직업',
        renderCell: ({row}:CellType) =>   MyTypography(row.job, "1.2rem")
    },
    {
      flex: 0.04,
      minWidth: 30,
      sortable: false,
      field: 'regDate',
      headerName: '등록일',
      renderCell: ({row}:CellType) =>   MyTypography(row.regDate, "1.2rem")
  },
  {
    flex: 0.04,
    minWidth: 30,
    sortable: false,
    field: 'modDate',
    headerName: '수정일',
    renderCell: ({row}:CellType) =>   MyTypography(row.modDate, "1.2rem")
},
]

}