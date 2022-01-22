import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.url}")` }}></div>
                    <div className="book-shelf-changer">
                        <select
                        value={
                            this.props.currentBook.shelf ?
                            this.props.currentBook.shelf:
                            "none"
                        } 
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

Book.propTypes = {
    changeShelf : PropTypes.func.isRequired,
    currentBook: PropTypes.object.isRequired,
    url: PropTypes.string,
    title:PropTypes.string.isRequired,
    author:PropTypes.array
}

export default Book;