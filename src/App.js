import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookAdd from './BookAdd'
import BookDisplay from './BookDisplay'
import BookSearchBar from './BookSearchBar'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : []
    // ,showSearchPage: false
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

  changeShelf = (book, shelf) => (
    BooksAPI.update(book, shelf).then (() =>
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      }
    ) 
    )
)



  render() {
    return (
      <div className="app">
        <Route exact path='/search' render = {() =>
          <BookSearchBar
            bookList = {this.state.books}
            changeShelf={this.changeShelf}
            changePage={this.changeShownPage}
          />
        }
        />
        <Route exact path='/' render = {() =>
            <BookDisplay
            changeShelf={this.changeShelf}            
            bookList = {this.state.books}
            changePage={this.changeShownPage}
            />
          }/>
      </div>
    )
  }
}

export default BooksApp
