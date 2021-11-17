/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { makeBookListData } from "../src/controllers/bookController"
import { BookListView } from "./BookListView";

export function BookList() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      "http://localhost:8080/book"
    ).then((res) => res.json()).then((data) => makeBookListData(data))
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
      <>
        <BookListView books={data} />
      </>
  );
}

