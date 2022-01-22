import React from 'react';
import BookShelf from './BookShelf';

class BookDisplay extends React.Component {
    render() {
        const currentlyReadingBooks = this.props.bookList.filter(book => book.shelf === "currentlyReading")
        const wantToReadBooks = this.props.bookList.filter((book) => book.shelf === "wantToRead")
        const readBooks = this.props.bookList.filter((book) => book.shelf === 'read')
        return (
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
                <div className="open-search">
                    <button onClick={() => this.props.changePage(true)}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default BookDisplay;