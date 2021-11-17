export function makeBookListData(rawBookData) {
    let odd = false
    return rawBookData.map((rawBook) => {
        let isEmpasised = false
        if (rawBook.book_id == 5 || rawBook.book_id == 10) {
            isEmpasised = true
        }
        odd = !odd

        return {
            author: rawBook.author,
            title: rawBook.title,
            id: rawBook.book_id,
            backgroundClass: odd ? "dark" : "light",
            isEmpasised
        }
    })
}