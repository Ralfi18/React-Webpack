import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';
import axios from 'axios';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      postBody: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost({
      title: this.state.postTitle,
      body: this.state.postBody,
    });

    this.setState({
      postTitle:"",
      postBody: ""
    });
  };

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render(){

    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit} action="">
          <input value={this.state.postTitle} onChange={this.inputChangeHandler} type="text" name="postTitle"/>
          <textarea value={this.state.postBody} onChange={this.inputChangeHandler} name="postBody" id="" cols="30" rows="10"></textarea>
          <button type="submit">Add</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return ({
    posts: state.posts
  });
}

const mapDispatchToProps = dispatch => {
  return({
    addPost: (post) => dispatch(addPost(post))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
