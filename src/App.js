import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./router/privateRoute";
import { LoginPage } from "./components/loginPage";
import { NotePage } from "./components/notePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/notes" element={<PrivateRoute />}>
          <Route path="/notes" element={<NotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// function App(props) {
//   return (
//     <div className="App">
//       <div>Count: {props.count}</div>
//       <button onClick={() => props.increaseCounter()}>Increase Count</button>
//       <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
