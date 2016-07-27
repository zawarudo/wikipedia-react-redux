import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBookmark, unsetBookmark } from '../actions/actions';

class BookmarkButton extends Component {
  render() {
    const { currPage, bookmarks, dispatch } = this.props;

    const showAddBookmark = bookmarks.filter((bookmark) =>
                            bookmark.pageid == currPage.pageid
                          ).length == 0;

    if(showAddBookmark) {
      // Show bookmark setter button
      return (
        <div className="bookmark-btn-container">
          <button
            className="btn-primary center-block"
            onClick={() => { dispatch(setBookmark(currPage)) }}>
            <span className="glyphicon glyphicon-heart"></span>{' '}
            Bookmark This!
          </button>
        </div>
      )
    } else {
      // Show bookmark unsetter button
      return (
        <div className="bookmark-btn-container">
          <button
            className="btn-danger center-block"
            onClick={() => { dispatch(unsetBookmark(currPage)) }}>
            <span className="glyphicon glyphicon-remove"></span>{' '}
            Remove Bookmark!
          </button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  pageID: state.pageID
})

export default connect(mapStateToProps)(BookmarkButton);