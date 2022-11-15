import TickerReducer from "./TicketReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    TickerReducer: TickerReducer
})

export default rootReducer;