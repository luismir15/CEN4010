import React, { Component } from "react";
import "../index.css";
import { connect } from "react-redux";
import { getWishLists, deleteWishList } from "../actions/wishlistActions";
import { addToCart } from "../actions/cartAction";
class WishList extends Component {
  async componentDidMount() {
    try {
      await this.props.getWishLists();
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { wishLists, addToCart } = this.props;
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1>Wish List</h1>
          </div>
        </div>
        {wishLists.map((wishList) => (
          <div id="products" key={wishList._id} class="row view-group mb-5">
            <div class="item col-xs-12 col-lg-12">
              <div class="card">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-xs-2">
                    <div class="img-event">
                      <img
                        class="img img-fluid"
                        src={`${wishList.thumbnailUrl}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-xs-10 d-flex align-items-center">
                    <div class="caption card-body">
                      <h4 class="group card-title inner list-group-item-heading">
                        {wishList.title}
                      </h4>
                      <p class="group inner list-group-item-text">
                        {wishList.shortDescription}
                      </p>
                      <p class="lead float-left mt-4">${wishList.price}</p>
                      <p className="float-right mt-4">
                        <button
                          class="btn btn-success"
                          onClick={async () => {
                            await addToCart(wishList);
                          }}
                        >
                          Add to cart
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={async () => {
                            // Delete the wish list
                            await this.props.deleteWishList(wishList._id);
                            // Update the wish list
                            await this.props.getWishLists();
                          }}
                        >
                          Remove
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state.wishLists.wishlists);
  return {
    wishLists: state.wishLists.wishlists,
    carts: state.carts.carts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getWishLists: () => dispatch(getWishLists()),
    deleteWishList: (id) => dispatch(deleteWishList(id)),
    addToCart: (data) => dispatch(addToCart(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WishList);

{
  /* <div>
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
          </div> */
}
