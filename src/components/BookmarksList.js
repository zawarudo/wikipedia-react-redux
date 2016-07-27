import React from 'react';
import { Link } from 'react-router';
import List from './List';

const BookmarksList = (props) => {
  const { bookmarks, unsetBookmark, dispatch } = props;

  const modifyDataToList = (input) => {
    if(!input) { return }

    const id = (item) => ({ ...item, id: item.pageid });
    // Set pathname param
    const pathname = (item) => ({ ...item, pathname: `/page/${item.pageid}` });
    // Set content param
    const content = (item) => ({ ...item, content: item.title });

    const postItemsCreator = (item) => <span className="glyphicon glyphicon-remove pull-right" onClick={(e) => {
                                              e.preventDefault();
                                              dispatch(unsetBookmark(item))
                                            }}></span>;

    const postItems = (item) => ({ ...item, postItems: postItemsCreator(item)});

    return input
            .map(id)
            .map(pathname)
            .map(content)
            .map(postItems);
  }


  if(!bookmarks || !bookmarks.length) {
    return <div>No Bookmarks Here!</div>
  } else {
    return (
      <div>
        <List items={modifyDataToList(bookmarks)} />
      </div>
    )
  }
};

export default BookmarksList;