import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookmarksList from '../components/BookmarksList';
import { unsetBookmark } from '../actions/actions.js';

class BookmarksContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <h2>
            Bookmarks
          </h2>
          <BookmarksList {...this.props} unsetBookmark={unsetBookmark} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
})

export default connect(mapStateToProps)(BookmarksContainer);