import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware } from 'redux'

export const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)
