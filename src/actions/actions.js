export const REQUEST_PAGES = 'REQUEST_PAGES';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const INVALIDATE_PAGES = 'INVALIDATE_PAGES';

import { Promise } from 'es6-promise';
import { fetchRandomPages } from '../utils/Wikipedia_API.js';

export function requestPages(invalidate = false) {
  return (dispatch) => {
    const action = {
      type: REQUEST_PAGES
    };

    dispatch(action);

    getPages(invalidate)
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
    const invalidate = true;
    dispatch(action);

    dispatch(requestPages(invalidate));
  }
}

export function getPages(didInvalidate = false) {
  return new Promise((resolve, reject) => {
    if(didInvalidate || !localStorage.getItem('pages')) {
      return fetchRandomPages()
      .then((pages) => {
        localStorage.setItem('pages', JSON.stringify(pages))
        return resolve(pages);
      });
    }

    return resolve(
      JSON.parse(localStorage.getItem('pages'))
    );
  });
}