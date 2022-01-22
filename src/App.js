import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookDisplay from './BookDisplay'
import BookSearchBar from './BookSearchBar'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
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
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      }
      )
    )
  )

  render() {
    return (
      <div className="app">
        <Routes>
        <Route exact path='/search' element={
          <BookSearchBar
            bookList={this.state.books}
            changeShelf={this.changeShelf}
          />
        }
        />

        <Route exact path='/' element={
          <BookDisplay
            changeShelf={this.changeShelf}
            bookList={this.state.books}
          />
        } />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
