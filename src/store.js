import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { uActorReducer } from "./redux/uActorReducer";

const initialState = {};
const reducer = combineReducers({
    uActorReducer: uActorReducer,
});

// ----------------- Firefox Redux Dev tools ------------------------------------
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
);
// ------------------------------------------------------------------------------

const store = createStore(reducer, initialState, enhancer);

store.subscribe(() => {});

export default store;
