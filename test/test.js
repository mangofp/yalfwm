import assert from 'assert'
import {makeBookListData} from '../src/controllers/bookController.js'

const books = [
    {
        "author": "Isaac Asimov",
        "title": "Through the looking glass 2",
        "descr": "Thoughtful story",
        "book_id": 3
    },
    {
        "author": "Isaac Asimov",
        "title": "Through the looking glass 3",
        "descr": "Thoughtful story",
        "book_id": 4
    },
    {
        "author": "Isaac Asimov",
        "title": "Through the looking glass 4",
        "descr": "Thoughtful story",
        "book_id": 5
    },
    {
        "author": "Isaac Asimov",
        "title": "Through the looking glass 5",
        "descr": "Thoughtful story",
        "book_id": 6
    },
    {
        "author": "Isaac Asimov",
        "title": "Through the looking glass 5",
        "descr": "Thoughtful story",
        "book_id": 9
    },
    {
        "author": "Isaac Asimov",
        "title": "Through the looking glass",
        "descr": "Changed'kjkj 'description - 7",
        "book_id": 2
    },
    {
        "author": "Isaac Asimov",
        "title": "Through the looking glass 5",
        "descr": "Thoughtful story",
        "book_id": 10
    },
    {
        "author": "Isaac Asimov",
        "title": "Through the looking glass 5",
        "descr": "Thoughtful story",
        "book_id": 11
    },
    {
        "author": "Isaac Asimov",
        "title": "Through the looking glass 5",
        "descr": "Thoughtful story",
        "book_id": 12
    }
]

describe("Booklist", function() {
    describe("bookController", function() {
        it("first row should be dark", function() {
            let viewData = makeBookListData(books)
            console.log(viewData)
            assert.equal('light', viewData[0].backgroundClass)
        })
    })
})