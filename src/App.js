import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BookList } from './BookList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookList />
    </QueryClientProvider>
  )
}

export default App;
