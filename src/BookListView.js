

export function BookListView({books}) {
    return (
        books.map((book) => {
            let emphasised = book.isEmpasised ? " book-emphasised" : ""
            return (
                <div className= {"bookContainer " + book.backgroundClass + emphasised}>
                    <div className="book-author">
                        {book.author}
                    </div>
                    <div className="book-title">
                        {book.title}
                    </div>

                </div>
            )
        })
    )
}