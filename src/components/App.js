import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
export default class App extends Component {
    state={
        images:[]
    }
   onSearchSubmit = async (term)=> {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID Gn-X8w6GLQGKhcYfSlNsqefAJyvbWAw1lwaalvqWJnY",
      },
    });

    this.setState({images: response.data.results})
    console.log(response.data.results)
  }
  render() {
    return (
      <div className="ui container">
        <h1> Fetching pics Data </h1>{" "}
        <SearchBar onSubmit={this.onSearchSubmit} />{" "}
        Found: {this.state.images.length} images
      
      </div>
    );
  }
}
