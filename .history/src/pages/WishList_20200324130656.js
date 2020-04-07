import React, { Component } from "react";
import './index.css';
 
class WishList extends Component {
  render() {
    return (
      <div>
      <h1>Library</h1>
{/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ----------> */}

<div class="container">
  <div class="row">
      <div class="col-lg-12 my-3">
          <div class="pull-left">
              <div class="btn-group">
                  <button class="btn btn-info" id="list">
                      List View
                  </button>
          
              </div>
          </div>
      </div>
  </div> 
  <div id="products" class="row view-group">
              <div class="item col-xs-4 col-lg-4">
                  <div class="thumbnail card">
                      <div class="img-event">
                          <img class="group list-group-image img-fluid" src="http://placehold.it/400x250/000/fff" alt="" />
                      </div>
                      <div class="caption card-body">
                          <h4 class="group card-title inner list-group-item-heading">
                              Product title</h4>
                          <p class="group inner list-group-item-text">
                              Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                          <div class="row">
                              <div class="col-xs-12 col-md-6">
                                  <p class="lead">
                                      $21.000</p>
                              </div>
                              <div class="col-xs-12 col-md-6">
                                  <a class="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="item col-xs-4 col-lg-4">
                  <div class="thumbnail card">
                      <div class="img-event">
                          <img class="group list-group-image img-fluid" src="http://placehold.it/400x250/000/fff" alt="" />
                      </div>
                      <div class="caption card-body">
                          <h4 class="group card-title inner list-group-item-heading">
                              Product title</h4>
                          <p class="group inner list-group-item-text">
                              Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                          <div class="row">
                              <div class="col-xs-12 col-md-6">
                                  <p class="lead">
                                      $21.000</p>
                              </div>
                              <div class="col-xs-12 col-md-6">
                                  <a class="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="item col-xs-4 col-lg-4">
                  <div class="thumbnail card">
                      <div class="img-event">
                          <img class="group list-group-image img-fluid" src="http://placehold.it/400x250/000/fff" alt="" />
                      </div>
                      <div class="caption card-body">
                          <h4 class="group card-title inner list-group-item-heading">
                              Product title</h4>
                          <p class="group inner list-group-item-text">
                              Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                          <div class="row">
                              <div class="col-xs-12 col-md-6">
                                  <p class="lead">
                                      $21.000</p>
                              </div>
                              <div class="col-xs-12 col-md-6">
                                  <a class="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="item col-xs-4 col-lg-4">
                  <div class="thumbnail card">
                      <div class="img-event">
                          <img class="group grid-group-image img-fluid" src="http://placehold.it/400x250/000/fff" alt="" />
                      </div>
                      <div class="caption card-body">
                          <h4 class="group card-title inner grid-group-item-heading">
                              Product title</h4>
                          <p class="group inner grid-group-item-text">
                              Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                          <div class="row">
                              <div class="col-xs-12 col-md-6">
                                  <p class="lead">
                                      $21.000</p>
                              </div>
                              <div class="col-xs-12 col-md-6">
                                  <a class="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="item col-xs-4 col-lg-4">
                  <div class="thumbnail card">
                      <div class="img-event">
                          <img class="group list-group-image img-fluid" src="http://placehold.it/400x250/000/fff" alt="" />
                      </div>
                      <div class="caption card-body">
                          <h4 class="group card-title inner list-group-item-heading">
                              Product title</h4>
                          <p class="group inner list-group-item-text">
                              Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                          <div class="row">
                              <div class="col-xs-12 col-md-6">
                                  <p class="lead">
                                      $21.000</p>
                              </div>
                              <div class="col-xs-12 col-md-6">
                                  <a class="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="item col-xs-4 col-lg-4">
                  <div class="thumbnail card">
                      <div class="img-event">
                          <img class="group list-group-image img-fluid" src="http://placehold.it/400x250/000/fff" alt="" />
                      </div>
                      <div class="caption card-body">
                          <h4 class="group card-title inner list-group-item-heading">
                              Product title</h4>
                          <p class="group inner list-group-item-text">
                              Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                          <div class="row">
                              <div class="col-xs-12 col-md-6">
                                  <p class="lead">
                                      $21.000</p>
                              </div>
                              <div class="col-xs-12 col-md-6">
                                  <a class="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>



    );
  }
  
}

 
export default WishList;


 {/* <div>
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
            </ul>
          </div> */}