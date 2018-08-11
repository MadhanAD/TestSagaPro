import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './../reducers'
import rootSaga from './../saga'


//create middleware
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(){

    const store = createStore(rootReducers,compose(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
    return store
}