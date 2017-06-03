// @flow
import {
    createStore,
    applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = (initialState:any, reducer: any) => {

    const store = createStore(reducer, initialState, composeWithDevTools(
        applyMiddleware(thunk)
    ))

    return store
}

export default configureStore