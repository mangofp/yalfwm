import { DataGrid } from '@mui/x-data-grid';

const columns  = [
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'title', headerName: 'Title', width: 250 },
  ];

export function BookListView({books}) {
    console.log(books)
    return (
        <DataGrid 
            rows={books} 
            columns={columns} 
            autoHeight={true}
        />
    )
}