import {
  Row,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import React from "react";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import ModalForm from "./ModalForm";

let bookCategories = ["fantasy", "horror", "history", "romance", "scifi"];
let books = {
  fantasy,
  horror,
  history,
  romance,
  scifi,
};

class BookList extends React.Component {
  state = {
    books: books.fantasy,
    categorySelected: "fantasy",

    query: "",
    selectedBook: {},
    displayModal: false,
  };

  handleDropdownChange = category => {
    this.setState({
      books: books[category].slice(0, 12),
      categorySelected: category,
    });
  };

  handleSearchQuery = searchQuery => {
    let category = this.state.categorySelected;

    if (searchQuery) {
      let filteredBooks = books[category].filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks.slice(0, 12) });
    } else {
      this.setState({ books: books[category].slice(0, 12) });
    }
  };

  handleFilterChange = event => {
    //console.log(event.target.value);
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <>
        <InputGroup>
          <DropdownButton
            as={InputGroup.Prepend}
            id="dropdown-basic-button"
            className="mb-3"
            title={this.state.categorySelected}
          >
            {bookCategories.map((category, index) => {
              return (
                <Dropdown.Item
                  href="#/action-1"
                  key={`dropdown-category-${index}`}
                  onClick={() => this.handleDropdownChange(category)}
                >
                  {category}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <FormControl
            placeholder="Search Books by Title"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={e => this.handleSearchQuery(e.target.value)}
          />
        </InputGroup>

        <ModalForm
          show={this.state.displayModal}
          book={this.state.selectedBook}
          onHide={() => this.setState({ displayModal: false })}
        />

        <Row>
          {/* {fantasy
            .filter(book =>
              book.title.toLowerCase().includes(this.state.query.toLowerCase())
            )
            .map(book => (
              <SingleBook
                book={book}
                onClick={() =>
                  this.setState({ displayModal: true, selectedBook: book })
                }
              />
            ))} */}

          {this.state.books ? (
            this.state.books.map(book => {
              return (
                <SingleBook
                  book={book}
                  onClick={() =>
                    this.setState({ displayModal: true, selectedBook: book })
                  }
                />
              );
            })
          ) : (
            <div> nothing here </div>
          )}
        </Row>
      </>
    );
  }
}

export default BookList;
