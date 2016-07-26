import {
  REQUEST_PAGES,
  RECEIVE_PAGES,
  INVALIDATE_PAGES
} from '../actions/actions.js';

export default function wikiPagesReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_PAGES:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PAGES:
      return {
        ...state,
        isFetching: false,
        pages: action.pages,
        lastUpdated: action.receivedAt
      }
    case INVALIDATE_PAGES:
      return {
        ...state,
        isFetching: false,
        pages: [],
        lastUpdated: action.receivedAt
      }
    default:
      return state;
  }
}