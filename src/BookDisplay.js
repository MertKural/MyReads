import React from 'react';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class BookDisplay extends React.Component {
    render() {
        const currentlyReadingBooks = this.props.bookList.filter(book => book.shelf === "currentlyReading")
        const wantToReadBooks = this.props.bookList.filter((book) => book.shelf === "wantToRead")
        const readBooks = this.props.bookList.filter((book) => book.shelf === 'read')
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf
                        changeShelf={this.props.changeShelf}
                        shelfTitle={"Currently Reading"}
                        shelfBooks={currentlyReadingBooks} />
                    <BookShelf
                        changeShelf={this.props.changeShelf}
                        shelfTitle={"Want To Read"}
                        shelfBooks={wantToReadBooks} />
                    <BookShelf
                        changeShelf={this.props.changeShelf}
                        shelfTitle={"Read"}
                        shelfBooks={readBooks} />
                </div>
                <Link className="open-search" to="/search">Add a book</Link>
            </div>
            </div>
        )
    }
}

BookDisplay.propTypes = {
    bookList : PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
}

export default BookDisplay;