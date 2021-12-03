import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import saga from '../saga';
import serviceFetchItemReducer from "../reducers/serviceFetchItemRedusecer/serviceFetchItemRedusecer";
import serviceFetchListReducer from "../reducers/serviceFetchListReducer/serviceFetchListReducer";

const reducer = combineReducers({
    serviceFetchList: serviceFetchListReducer,
    serviceFetchItem: serviceFetchItemReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);

export default store;