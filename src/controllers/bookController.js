export function makeBookListData(rawBookData) {
    let odd = false
    return rawBookData.map((rawBook) => {
        let isEmpasised = false
        if (rawBook.book_id == 10) {
            isEmpasised = true
        }
        return {
            author: rawBook.author,
            title: rawBook.title,
            book_id: rawBook.book_id,
            backgroundClass: odd ? "dark" : "light",
            isEmpasised
        }
    })
}