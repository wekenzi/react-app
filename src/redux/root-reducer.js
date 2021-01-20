import { combineReducers } from "redux";

import cardsReducer from "./cards/cards-reducer";

export default combineReducers({
    mosters: cardsReducer
});