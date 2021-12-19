import "./styles.css";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/action";
function App(props) {
  return (
    <div className="App">
      <h1>Your Age:{props.age}</h1>
      <button onClick={props.onUp}>Age_Up</button>
      <button onClick={props.onDown}>Age_Down</button>
      {props.loading && (
        <img
          src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"
          className="App-logo"
        />
      )}
    </div>
  );
}
const mapStatetoProps = (state) => {
  return {
    age: state.age,
    loading: state.loading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUp: () => dispatch(actionCreator.ageUp(1)),
    onDown: () => dispatch(actionCreator.ageDown(1))
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(App);
