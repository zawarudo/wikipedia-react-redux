export const REQUEST_PAGES = 'REQUEST_PAGES';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const INVALIDATE_PAGES = 'INVALIDATE_PAGES';

import { fetchRandomPages } from '../utils/Wikipedia_API.js';

export function requestPages() {
  return (dispatch) => {
    const action = {
      type: REQUEST_PAGES
    };

    dispatch(action);

    getPages()
      .then((json) => dispatch(receivePages(json)));
  }
}

export function receivePages(pages) {
  return {
    type: RECEIVE_PAGES,
    receivedAt: Date.now(),
    pages: pages
  }
}

export function invalidatePages() {
  return (dispatch) => {
    const action = {
      type: INVALIDATE_PAGES,
      receivedAt: Date.now()
    };

    dispatch(action);

    dispatch(requestPages());
  }
}

export function getPages() {
  return fetchRandomPages();
}