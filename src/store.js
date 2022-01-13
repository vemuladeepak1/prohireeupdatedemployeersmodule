
import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./rootReducer";
import rootReducer from "./Reducer/rootReducer";


const store = createStore(rootReducer);

export default store



// import { createStore, applyMiddleware } from "redux";
// // import rootReducer from "./rootReducer";
// import {composeWithDevTools} from 'redux-devtools-extension'
// import rootReducer from "./Reducer/rootReducer";


// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware));

// export default store