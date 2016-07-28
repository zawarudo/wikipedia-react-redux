import {
  REQUEST_SEARCH_RESULTS,
  RECEIVE_SEARCH_RESULTS,
  INVALIDATE_SEARCH_RESULTS
} from '../actions/actions';

export default function searchReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_SEARCH_RESULTS:
      return {
        ...state,
        searchTerm: action.searchTerm,
        isFetching: true,
      }
    case RECEIVE_SEARCH_RESULTS:
      return {
        ...state,
        isFetching: false,
        searchResults: action.results,
        lastUpdated: action.receivedAt
      }
    case INVALIDATE_SEARCH_RESULTS:
      return {
        ...state,
        isFetching: false,
        searchResults: [],
        lastUpdated: action.receivedAt
      }
    default:
      return state;
  }
}