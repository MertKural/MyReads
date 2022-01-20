import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {


    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.shelfBooks.map((book) =>
                            <li key={book.id}>
                                <Book
                                    changeShelf={this.props.changeShelf}
                                    currentBook = {book}
                                    url={book.imageLinks? book.imageLinks.thumbnail : null}
                                    title={book.title}
                                    author={book.authors}
                                />
                            </li> 
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;