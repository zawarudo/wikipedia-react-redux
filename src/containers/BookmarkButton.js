import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBookmark } from '../actions/actions.js';

class BookmarkButton extends Component {
  render() {
    const { dispatch, currPage } = this.props;
    return (
      <div>
        <button
          className="btn-primary center-block"
          onClick={() => { dispatch(setBookmark(currPage)) }}>
          <span className="glyphicon glyphicon-heart"></span>{' '}
          Bookmark This!
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pageID: state.pageID
})

export default connect(mapStateToProps)(BookmarkButton);