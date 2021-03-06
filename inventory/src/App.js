import "./App.css";
import { PropTypes } from "prop-types";
import Info from "./Info.js";
import { useState } from "react";

function App() {
  // function-based component
  return (
    <div className="App">
      <Info />
      <ButtonState></ButtonState>
    </div>
  );
}
/* Creating default properties
1) replacing AddItem parameters to property names (text, number) corresponding to the properties
you would set for jsx component
2) using the AddItem.defaultProps object to set the parameters to certain default values
after componenet declaration

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}

AddItem.defaultProps = {
  number: 2,
  text: "default",
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};
*/

function ButtonState() {
  const [title, setTitle] = useState(""); //function that can allow you to set certain states based on clicked changes
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("You now have a title.");
  };

  const updateCounterClicked = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Data title={title} count={count} />
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}

export default App;
