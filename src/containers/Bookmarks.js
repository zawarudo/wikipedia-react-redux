import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookmarksList from '../components/BookmarksList';
import { unsetBookmark } from '../actions/actions.js';

class BookmarksContainer extends Component {
  render() {
    return (
      <div>
        <h4>
          Bookmarks
        </h4>
        <BookmarksList {...this.props} unsetBookmark={unsetBookmark} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
})

export default connect(mapStateToProps)(BookmarksContainer);