import React, { Component } from "react";
import '../index.css';

class Help extends Component {
  render() {
    return (

        <div>
        <div class="jumbotron jumbotron-sm">
          <div class="container">
              <div class="row">
                  <div class="col-sm-12 col-lg-12">
                      <h1 class="h1">
                          Need Help? <small>Contact us</small></h1>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-md-8">
                  <div class="well well-sm">
                      <form>
                      <div class="row">
                          <div class="col-md-6">
                              <div class="form-group">
                                  <label for="name">
                                      Name</label>
                                  <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />
                              </div>
                              <div class="form-group">
                                  <label for="email">
                                      Email Address</label>
                                  <div class="input-group">
                                      <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                      </span>
                                      <input type="email" class="form-control" id="email" placeholder="Enter email" required="required"/></div>
                              </div>
                              <div class="form-group">
                                  <label for="subject">
                                      Subject</label>
                                  <select id="subject" name="subject" class="form-control" required="required">
                                      <option value="na" selected="">Choose One:</option>
                                      <option value="service">General Customer Service</option>
                                      <option value="suggestions">Suggestions</option>
                                      <option value="product">Product Support</option>
                                  </select>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <label for="name">
                                      Message</label>
                                  <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                      placeholder="Message"></textarea>
                              </div>
                          </div>
                          <div class="col-md-12">
                              <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
                                  Send Message</button>
                          </div>
                      </div>
                      </form>
                  </div>
              </div>
              <div class="col-md-4">
                  <form>
                  <legend><span class="glyphicon glyphicon-globe"></span> Our office</legend>
                  <address>
                      <strong>GeekText, Inc.</strong>
                      <p>
                      1401 Brickell Ave, Suite 630
                      iami, FL 33131</p>
                      <abbr title="Phone">
                          P:</abbr>
                      (1-800) 534-Geek
                  </address>
                  <address>
                      <strong>GeekText Support</strong><p>
                      <a href="mailto:#">Support@geektext.com</a>
                      </p>
                  </address>
                  </form>
              </div>
          </div>
      </div>
 </div>

    );
  }
}

export default Help;