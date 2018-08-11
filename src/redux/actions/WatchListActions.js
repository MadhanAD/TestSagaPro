import {createAction } from 'redux-actions'

export const WATCH_LIST = 'watchList/watchList'
export const getWatchList = createAction(WATCH_LIST)

export const WATCH_LIST_REQUEST = 'watchList/watchListRequest'
export const requestWatchList = createAction(WATCH_LIST_REQUEST)

export const WATCH_LIST_SUCCESS = 'watchList/watchListSuccess'
export const successWatchList = createAction(WATCH_LIST_SUCCESS)

export const WATCH_LIST_FAILED = 'watchList/watchListFailed'
export const failedWatchList = createAction(WATCH_LIST_FAILED)