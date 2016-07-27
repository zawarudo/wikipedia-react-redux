import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BookmarksList from '../components/BookmarksList';

class BookmarksContainer extends Component {
  render() {
    return (
      <div>
        <h4>
          Bookmarks
        </h4>
        <BookmarksList {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
})

export default connect(mapStateToProps)(BookmarksContainer);