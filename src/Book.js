import React from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {

    render() {
        console.log(typeof (this.props.changeShelf))
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.url}")` }}></div>
                    <div className="book-shelf-changer">
                        <select
                        value={this.props.currentBook.shelf} 
                        onChange={(e) => {this.props.changeShelf(this.props.currentBook, e.target.value)}}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        )
    }
}

export default Book;