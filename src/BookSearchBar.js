import React from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class BookSearchBar extends React.Component {

    state = {
        query: "",
        showingBooks: []
    }


    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
        if (query.length > 0) {
            BooksAPI.search(query).then((returnedBooks) => {
                if (returnedBooks && !returnedBooks.error) {
                    this.setState(() => ({
                        showingBooks: returnedBooks
                    }))

                }
            }

            )
        }
        
    }


    render() {

        return (


            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.props.changePage(false)}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.showingBooks.map((book) =>
                                {this.props.bookList.forEach(bookListbook => {
                                    {console.log(bookListbook.id,book.id)}
                                    if (bookListbook.id == book.id){
                                        book.shelf = bookListbook.shelf
                                    }else {
                                        book.shelf = "none"
                                    }
                                })          
                                return (              
                            <li key={book.id}>
                                <Book
                                    changeShelf={this.props.changeShelf}
                                    currentBook={book}
                                    url={book.imageLinks ? book.imageLinks.thumbnail : null}
                                    title={book.title}
                                    author={book.authors} 
                                    />
                            </li>)}
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearchBar;