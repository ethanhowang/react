import React from "react";
import { PropTypes } from "prop-types";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  // classed based components
  render() {
    const title = this.props.title;
    const showTitle = true;
    if (showTitle) {
      return (
        <div>
          <h1>{title}</h1>
          <p>Manage your stuff.</p>
        </div>
      );
    } else {
      return <p>empty</p>;
    }
  }
}

Info.defaultProps = {
  title: "Default",
};

Info.propTypes = {
  title: PropTypes.string,
};

export default Info;
// if you just used export (without default), the import line would be written as {Info} instead
