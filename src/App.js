import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: '',
      sort: '',
      error: null
    }
  }
  setSearch(search) {
    this.setState({
      search
    });
  }
  setSort(sort) {
    this.setState({
      sort
    });
  }
  render() {
    const books = this.state.books.map((book, i) => {
      return <Book {...book} key={i} />
     })
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
