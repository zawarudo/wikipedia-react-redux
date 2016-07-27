import {
  REQUEST_PAGE_DETAILS,
  RECEIVE_PAGE_DETAILS,
  SET_DETAIL_PAGE,
  UNSET_DETAIL_PAGE
} from '../actions/actions.js';

export default function wikiPageDetailsReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_PAGE_DETAILS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PAGE_DETAILS:
      return {
        ...state,
        isFetching: false,
        pageDetails: action.pageDetails,
        lastUpdated: action.receivedAt
      }
    case SET_DETAIL_PAGE:
      return {
        ...state,
        currDetailPage: action.currDetailPage
      }
    case UNSET_DETAIL_PAGE:
      return {
        ...state,
        currDetailPage: undefined
      }
    default:
      return state;
  }
}