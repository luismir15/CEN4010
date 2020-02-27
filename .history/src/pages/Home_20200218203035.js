import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from "axios";


class Home extends Component {

    state = {
        books: []
    }

    componentDidMount(){
        Axios.post("/books", { query: "Humor"})
            .then( success => {
                console.log('do something with success')
            })
            .error( error => {
                console.log('handle the error that the backend sends.')
            })
        Axios.get("/books")
            .then( response => {
                this.setState({
                    books: response.books
                })
            })
            .catch(err => {
                console.log('error getting books', err)
            })
    }

    render() {
        return (
            <div>
                <ul className="flexbox-container">

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-1" >
                            <img className="fit-container" src="https://kbimages1-a.akamaihd.net/52c896b6-2750-4c3d-a844-0760f23117f9/353/569/90/False/how-to-study-smart-study-secrets-of-an-honors-student.jpg" />
                        </div>
                        <h4>How to study</h4>
                    </div>

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-2">
                            <img className="fit-container" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457542606l/25136217._SY475_.jpg" />
                        </div>
                        <h4>Up and Going</h4>
                    </div>

                    <li><NavLink to="/BookDetails" style={{ textDecoration: 'none' }}>
                        <div className="book-wrapper">
                            <div className="flexbox-item flexbox-item-3">
                                <img className="fit-container" src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" />
                            </div>
                            <h4>Harry Potter</h4>
                        </div>
                    </NavLink></li>

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-4">
                            <img className="fit-container" src="https://i.harperapps.com/covers/9780062472502/x510.jpg" />
                        </div>
                        <h4>Girl Code</h4>
                    </div>


                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-5">
                            <img className="fit-container" src="https://images-na.ssl-images-amazon.com/images/I/51dzkNKzYDL.jpg" />
                        </div>
                        <h4>React.js</h4>
                    </div>

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-4">
                            <img className="fit-container" src="https://i.harperapps.com/covers/9780062472502/x510.jpg" />
                        </div>
                        <h4>Girl Code</h4>
                    </div>

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-5">
                            <img className="fit-container" src="https://images-na.ssl-images-amazon.com/images/I/51dzkNKzYDL.jpg" />
                        </div>
                        <h4>React.js</h4>
                    </div>

                    <li><NavLink to="/BookDetails" style={{ textDecoration: 'none' }}>
                        <div className="book-wrapper">
                            <div className="flexbox-item flexbox-item-3">
                                <img className="fit-container" src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" />
                            </div>
                            <h4>Harry Potter</h4>
                        </div>
                    </NavLink></li>

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-1" >
                            <img className="fit-container" src="https://kbimages1-a.akamaihd.net/52c896b6-2750-4c3d-a844-0760f23117f9/353/569/90/False/how-to-study-smart-study-secrets-of-an-honors-student.jpg" />
                        </div>
                        <h4>How to study</h4>
                    </div>

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-2">
                            <img className="fit-container" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457542606l/25136217._SY475_.jpg" />
                        </div>
                        <h4>Up and Going</h4>
                    </div>

                    <li><NavLink to="/BookDetails" style={{ textDecoration: 'none' }}>
                        <div className="book-wrapper">
                            <div className="flexbox-item flexbox-item-3">
                                <img className="fit-container" src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" />
                            </div>
                            <h4>Harry Potter</h4>
                        </div>
                    </NavLink></li>

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-1" >
                            <img className="fit-container" src="https://kbimages1-a.akamaihd.net/52c896b6-2750-4c3d-a844-0760f23117f9/353/569/90/False/how-to-study-smart-study-secrets-of-an-honors-student.jpg" />
                        </div>
                        <h4>How to study</h4>
                    </div>

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-2">
                            <img className="fit-container" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457542606l/25136217._SY475_.jpg" />
                        </div>
                        <h4>Up and Going</h4>
                    </div>

                    <li><NavLink to="/BookDetails" style={{ textDecoration: 'none' }}>
                        <div className="book-wrapper">
                            <div className="flexbox-item flexbox-item-3">
                                <img className="fit-container" src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" />
                            </div>
                            <h4>Harry Potter</h4>
                        </div>
                    </NavLink></li>

                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-1" >
                            <img className="fit-container" src="https://kbimages1-a.akamaihd.net/52c896b6-2750-4c3d-a844-0760f23117f9/353/569/90/False/how-to-study-smart-study-secrets-of-an-honors-student.jpg" />
                        </div>
                        <h4>How to study</h4>
                    </div>
                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-5">
                            <img className="fit-container" src="https://images-na.ssl-images-amazon.com/images/I/51dzkNKzYDL.jpg" />
                        </div>
                        <h4>React.js</h4>
                    </div>
                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-4">
                            <img className="fit-container" src="https://i.harperapps.com/covers/9780062472502/x510.jpg" />
                        </div>
                        <h4>Girl Code</h4>
                    </div>
                    <div className="book-wrapper">
                        <div className="flexbox-item flexbox-item-2">
                            <img className="fit-container" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457542606l/25136217._SY475_.jpg" />
                        </div>
                        <h4>Up and Going</h4>
                    </div>

                </ul>
            </div>
        );
    }
}

export default Home;
