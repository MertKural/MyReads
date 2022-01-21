import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookAdd from './BookAdd'
import BookDisplay from './BookDisplay'
import BookSearchBar from './BookSearchBar'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : [],
    showSearchPage: false
  }

  changeShownPage = (changePage) => {
    this.setState({ showSearchPage: changePage })
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  changeShelf = (book, shelf) => {
    console.log("IAMHERE")
    BooksAPI.update(book, shelf)
    console.log("IWAITED")
    setTimeout(() => (
      (BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    }
    ))
    ),2000)
  }


  render() {
    return (
      <div className="app">

        {this.state.showSearchPage ? (
          <BookSearchBar
            bookList = {this.state.books}
            changeShelf={this.changeShelf}
            changePage={this.changeShownPage}
          />
        ) : (

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookDisplay
            changeShelf={this.changeShelf}            
            bookList = {this.state.books}
            />
            <BookAdd
              changePage={this.changeShownPage}
            />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
