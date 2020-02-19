import React, { Component } from 'react';
import Navitem from './Navitem';
import SearchField from 'react-search-field';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="Register" tolink="/register"  activec={this.activeitem}></Navitem>
            <Navitem item="Login" tolink="/login"  activec={this.activeitem}></Navitem>
            <Navitem item="Orders" tolink="/orders"  activec={this.activeitem}></Navitem>
            <Navitem item="Book Details" tolink="/bookdetails"  activec={this.activeitem}></Navitem>
            <i class="material-icons md-dark md-24">shopping_cart</i>
            <SearchField placeholder='Search item'/>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar