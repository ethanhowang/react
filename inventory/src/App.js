import "./App.css";
import { PropTypes } from "prop-types";
import Info from "./Info.js";

function App() {
  // function-based component
  return (
    <div className="App">
      <Info />
      <AddItem text="Ethan" number={2} />
      <AddItem text="Joe" number={5} />
      <AddItem />
    </div>
  );
}
/* Creating default properties
1) replacing AddItem parameters to property names (text, number) corresponding to the properties
you would set for jsx component
2) using the AddItem.defaultProps object to set the parameters to certain default values
after componenet declaration
*/
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

export default App;
