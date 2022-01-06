import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {Store , PersistStorage} from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
    <PersistGate
          persistor={PersistStorage}
          onBeforeLift={async () => {
            // await Font.loadAsync(Fonts);
            console.log("persist on before lift")
          }}
        >
          <App />
        </PersistGate>
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
