import React from "react";
import { PropTypes } from "prop-types";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // classed based components
  buttonPressed() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.buttonPressed()}>Click Me!</button>
      </div>
    );
  }
}

/*Info.defaultProps = {
  title: "Default",
};

Info.propTypes = {
  title: PropTypes.string,
};*/

export default Info;
// if you just used export (without default), the import line would be written as {Info} instead
