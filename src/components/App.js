import React from 'react';
import { withStyles } from 'react-jss';
import { connect } from "react-redux";
import { clearAllPosts } from '../actions/index';
import axios from 'axios';
// import { withRouter } from 'react-router-dom'
const styles = {
  "post-wrapper": {
    width: "80%",
    margin: '0 auto'
  },
  myButton: {
    color: 'green',
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      // jss-plugin-nested applies this to a child span
      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts:[]};
  }
  clearAllPost = () => {
    this.props.clearAllPosts();
  }

  componentDidMount() {
    const _this = this;
    axios.post(`http://ci-api.loc/api`, { data: null })
      .then(res => {
        if(res && res.data) {
          this.setState({
            posts: res.data
          })
        }
      })
  }


  render() {
    const { classes } = this.props;
    const { posts } = this.state;
    return(
      <div className={classes['post-wrapper']}>
        <h1>Posts</h1>
        <button onClick={this.clearAllPost}>Clear all posts</button>
        <div>
          <ul>
            {posts && posts && posts.length && posts.map((post, i) => {
              return <li key={i}>{ post.title }</li>
            }) || null }
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};
const mapDispatchToProps = dispatch => {
  return({
    clearAllPosts: () => dispatch(clearAllPosts())
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App)) ;
