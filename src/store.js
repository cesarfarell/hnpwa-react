import { createStore, combineReducers } from "redux";
import searchReducer from './actions/search.reducer';
import userReducer from './actions/user.reducer';
import newsReducer from './actions/news.reducer';

const rootReducer = combineReducers({
    search: searchReducer,
    user: userReducer,
    news: newsReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;