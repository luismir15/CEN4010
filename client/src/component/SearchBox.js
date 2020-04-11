import React, { Component } from 'react';

const SearchBox = (props) => {

    return (
        <div className="search-area">
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} placeholder="Search books" type="text"/>
                <button type="submit">Search</button>
                <select value={props.page} onChange={props.handlePage}>
                    <option value="" disabled selected>Results</option>
                    <option value="Ten">10</option>
                    <option value="Twenty">20</option>
                </select>
                <select value={props.sort} onChange={props.handleSort}>
                    <option value="" disabled selected>Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                    <option value="High">Hight to Low</option>
                    <option value="Low">Low to High</option>
                    <option value="Expensive">$$$-$</option>
                    <option value="Cheap">$-$$$</option>
                    <option value="Author-A">Author: A-Z</option>
                    <option value="Author-Z">Author: Z-A</option>
                    <option value="Title-A">Title: A-Z</option>
                    <option value="Title-Z">Title: Z-A</option>
                    <option value="Ten">10</option>
                    <option value="Twenty">20</option>
                </select>
            </form>
        </div>
      
    );
}

export default SearchBox;
