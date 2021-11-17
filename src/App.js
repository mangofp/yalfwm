import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BookList } from './BookList';
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Container fixed>
        <BookList />
      </Container>
    </QueryClientProvider>
  )
}

export default App;
