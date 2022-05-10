import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: "basic name"
  }
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  }
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <>
        hi, my name is {name}. <br />
        children is {children}. <br />
        my favoriteNumber is {favoriteNumber}
      </>
    )
  }
};

// const MyComponent = ({name, favoriteNumber, children}) => {
//   return <div>hi, my name is {name}. <br />
// 	children {children}
//   <br />
//   my favoriteNumber is {favoriteNumber}.
// 	</div>
// };

// props 값이 없을때 
// MyComponent.defaultProps = {
//   name: "basic name"
// };

// 이렇게 해놓으면 name 값음 무조건 string
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

export default MyComponent;