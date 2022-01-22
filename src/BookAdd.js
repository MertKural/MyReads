import React from 'react';

class BookAdd extends React.Component{
    render(){
        return(
            <div className="open-search">
            <button onClick={() => this.props.changePage(true)}>Add a book</button>
          </div>
        )
    }
}

 export default BookAdd;