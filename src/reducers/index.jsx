import { combineReducers } from "redux";
import QuestionReducer from "./reducer-questions";

const allReducers = combineReducers({
  questions: QuestionReducer
});

export default allReducers;