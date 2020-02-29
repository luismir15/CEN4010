import React, { Component } from "react";
<link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

class Comments extends Component {
//   render() {
    return (
        <div class="container">
        <div class="row">
            <div class="col-md-8">
              <div class="page-header">
                <h1><small class="pull-right">45 comments</small> Comments </h1>
              </div> 
               <div class="comments-list">
                   <div class="media">
                       <p class="pull-right"><small>5 days ago</small></p>
                        <a class="media-left" href="#">
                          <img src="http://lorempixel.com/40/40/people/1/">
                        </a>
                        <div class="media-body">
                            
                          <h4 class="media-heading user_name">Baltej Singh</h4>
                          Wow! this is really great.
                          
                          <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
                        </div>
                      </div>
                   <div class="media">
                       <p class="pull-right"><small>5 days ago</small></p>
                        <a class="media-left" href="#">
                          <img src="http://lorempixel.com/40/40/people/2/">
                        </a>
                        <div class="media-body">
                            
                          <h4 class="media-heading user_name">Baltej Singh</h4>
                          Wow! this is really great.
                          
                          <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
                        </div>
                      </div>
                   <div class="media">
                       <p class="pull-right"><small>5 days ago</small></p>
                        <a class="media-left" href="#">
                          <img src="http://lorempixel.com/40/40/people/3/">
                        </a>
                        <div class="media-body">
                            
                          <h4 class="media-heading user_name">Baltej Singh</h4>
                          Wow! this is really great.
                          
                          <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
                        </div>
                      </div>
                   <div class="media">
                       <p class="pull-right"><small>5 days ago</small></p>
                        <a class="media-left" href="#">
                          <img src="http://lorempixel.com/40/40/people/4/">
                        </a>
                        <div class="media-body">
                            
                          <h4 class="media-heading user_name">Baltej Singh</h4>
                          Wow! this is really great.
                          
                          <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
                        </div>
                      </div>
               </div>
                
                
                
            </div>
        </div>
    </div>
            

    );
  }


export default Comments;