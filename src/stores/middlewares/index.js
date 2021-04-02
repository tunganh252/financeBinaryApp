import thunk from "redux-thunk";
import logger from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

middlewares.push(thunk);

export default middlewares;
