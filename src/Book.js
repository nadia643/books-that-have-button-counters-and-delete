import React, { Component } from "react";
import './App.css';

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            name: "John",
            showInfo: true
        };
    }

  addCount = () => {
      this.setState({
          count: this.state.count +1
      })
  };
  lowerCount = () => {
    this.setState({
        count: this.state.count -1
    })
  };
  resetCount = () => {
    this.setState({
        count: 0
    })
  };

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })

  }

  render() {
    // console.log(this.props);
    const { id, img, title, author } = this.props.info;
    const {handleDelete} = this.props


  const checkInfo = (info) => {
    if(info===true) {
      return <p>Ea officia cupidatat aliquip officia ad mollit eiusmod adipisicing amet laborum culpa.</p>
    }
    else {
      return null
    }
  }

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <h3>Count: {this.state.count}</h3>
          <h3>Name: {this.state.name}</h3>
          <button type="button" onClick={this.addCount}>Add count</button>
          <button type="button" onClick={this.lowerCount}>Lower count</button>
          <button type="button" onClick={this.resetCount}>Reset count</button>
          <button type="button" onClick={() => handleDelete(id)}>Delete me</button>
          <button type="button" onClick={this.handleInfo}>Toggle Info</button>
          {checkInfo(this.state.showInfo)}
        </div>  
      </article>
    );
  }
}