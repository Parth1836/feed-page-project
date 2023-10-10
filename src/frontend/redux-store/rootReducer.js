import { combineReducers } from "redux";
import feedSlice from "./slices/feedSlice";


const rootReducer = combineReducers({
    feeds: feedSlice,
});

export default rootReducer;