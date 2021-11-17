/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { makeBookListData } from "../src/controllers/bookController"
import { BookListView } from "./BookListView";
import SearchAppBar from "./SearchAppBar"
import { useState, useEffect } from "react";

export function BookList() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      "http://localhost:8080/book"
    ).then((res) => res.json()).then((data) => makeBookListData(data))
  );

  const [booksData, setBooksData] = useState([])

  useEffect(()=>{
    setBooksData(data)
  }, [data])

  const actionFilter = (filter) => {
    //TODO do the actual fitlering of bookData
    console.log(filter)
  }

  if (isLoading || !booksData) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
      <>
        <SearchAppBar actionFilter={actionFilter} />
        <BookListView books={booksData}  />
      </>
  );
}

