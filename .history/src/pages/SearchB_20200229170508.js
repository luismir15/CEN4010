import React, { Component } from 'react';

class SearchB extends Component {
  render() {
    return (
        <div class="container">
        <div class="row">
            <div class="span12">
                <form id="custom-search-form" class="form-search form-horizontal pull-right">
                    <div class="input-append span12">
                        <input type="text" class="search-query" placeholder="Search"/>
                        <button type="submit" class="btn"><i class="icon-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
  }
}

export default SearchB;
