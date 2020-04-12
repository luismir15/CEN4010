import React, { Component } from 'react';
import BookList from './BookList';
import SearchBox from './SearchBox';
import request from 'superagent';

class Books extends Component {

    constructor(props){
        super(props)
        this.state = {
            books: [],
            searchField: '',
            sort: '',
            page: ''
        }
    }
    componentDidMount() {
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField, maxResults: 40 })
            .then((data) => {
                this.setState({ books: [...data.body.items] })
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField, maxResults: 40 })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items] })
        })
    }

    handleSubmitOfTen = () => {
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField, maxResults: 10 })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items] })
        })
    }

    handleSubmitOfTwenty = () => {
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField, maxResults: 20 })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items] })
        })
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e) => {
        this.setState({ sort: e.target.value });
    }

    handlePage = (e) => {
        this.setState({ page: e.target.value });
    }
    
    render() {
        const filteredBooks = this.state.books.sort((a, b) => {
            const price1 = a.saleInfo.hasOwnProperty('listPrice') == false ? "$0.00" : a.saleInfo.listPrice.amount;
            const price2 = b.saleInfo.hasOwnProperty('listPrice') == false ? "$0.00" : b.saleInfo.listPrice.amount;
            if(this.state.sort === 'Newest'){
                console.log("in newest")
                return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
            }
            else if(this.state.sort === 'Oldest'){
                return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
            }
            else if(this.state.sort === 'High'){
                return parseInt(b.volumeInfo.averageRating) - parseInt(a.volumeInfo.averageRating);
            }
            else if(this.state.sort === 'Low'){
                return parseInt(a.volumeInfo.averageRating) - parseInt(b.volumeInfo.averageRating);
            }
            else if(this.state.sort === 'Expensive'){
                return parseInt(price2) - parseInt(price1);
            }
            else if(this.state.sort === 'Cheap'){
                return parseInt(price1) - parseInt(price2);
            }
            else if(this.state.sort === 'Title-A'){
                return ('' + a.volumeInfo.title).localeCompare(b.volumeInfo.title);
            }
            else if(this.state.sort === 'Title-Z'){
                return ('' + b.volumeInfo.title).localeCompare(a.volumeInfo.title);
            }
            else if(this.state.sort === 'Author-A'){
                return ('' + a.volumeInfo.authors).localeCompare(b.volumeInfo.authors);
            }
            else if(this.state.sort === 'Author-Z'){
                return ('' + b.volumeInfo.authors).localeCompare(a.volumeInfo.authors);
            }
          return;
        })

        const pageLenght = this.state.books.map(() => {
            if(this.state.page =='Ten'){
                return this.handleSubmitOfTen();
            }
            else if(this.state.page == 'Twenty'){
                return this.handleSubmitOfTwenty();
            }
        });

        {/*const pageLenght = this.state.books.sort((a, b) => {
            if(this.state.books =='Ten'){
                return this.handleSubmitOfTen();
            }
            else if(this.state.books == 'Twenty'){
                return this.handleSubmitOfTwenty();
            }
        return;
        })*/}

        return (
            <div className="wrapper">
                <SearchBox data={this.state} 
                           handleSubmit={this.handleSubmit}
                           handleChange={this.handleChange} 
                           handlePage={this.handlePage} 
                           handleSort={this.handleSort} />
                <BookList books={filteredBooks} page={pageLenght}/>
            </div>
        );
    }
}

export default Books;
