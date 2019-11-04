import React from 'react';
// import { withRouter } from 'react-router-dom'

class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.match);
    return(
      <div>Post</div>
    );
  }
}

export default Post;
