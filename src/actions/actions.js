export const REQUEST_PAGES = 'REQUEST_PAGES';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const INVALIDATE_PAGES = 'INVALIDATE_PAGES';

import { Promise } from 'es6-promise';
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
    localStorage.setItem('pages', "");
    dispatch(requestPages());
  }
}

export function getPages() {
  return new Promise((resolve, reject) => {
    const pagesSerialized = localStorage.getItem('pages');

    if(!pagesSerialized) {
      return fetchRandomPages()
      .then((pages) => {
        const serialize = JSON.stringify(pages);
        localStorage.setItem('pages', serialize);
        return resolve(pages);
      });
    }

    const pages = JSON.parse(pagesSerialized);
    return resolve(pages);
  });
}