import loggedInReducer from "./reducers/isLoggedIn";
import notesReducer from "./reducers/notes";

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
import logger from "redux-logger";

const ConfigureStore = () => {
  const config = {
    key: "root",
    storage: storage,
    // debug:  MODE === "DEV", //should be false for production mode
  };
  const Store = createStore(
    persistCombineReducers(config, {
      loggedInReducer,
      notesReducer,
    }),

    applyMiddleware(logger)
  );
  console.log(Store.getState());
  const PersistStorage = persistStore(Store);
  return { Store, PersistStorage };
};

export const { Store, PersistStorage } = ConfigureStore();
