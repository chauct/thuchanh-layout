import React, { Component } from "react";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import Item from "./item";
import "./home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Item />
        <Footer />
      </div>
    );
  }
}

export default Home;
