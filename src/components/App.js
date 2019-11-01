import React from 'react';
import { withStyles } from 'react-jss';
import { connect } from "react-redux";

const styles = {
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
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return(
      <div className={classes.myButton}>App Class <span>Span</span></div>
    );
  }
}
const mapStateToProps = state => {
  return { articles: state.articles };
};
export default connect(mapStateToProps)(withStyles(styles)(App));
