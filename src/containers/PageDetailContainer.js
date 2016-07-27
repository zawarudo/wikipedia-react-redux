import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestPageDetails, unsetDetailPage } from '../actions/actions';
import PageDetail from '../components/PageDetail';
import BookmarkButton from '../containers/BookmarkButton';
import LoadingSpinner from '../components/LoadingSpinner';

class PageDetailContainer extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(requestPageDetails(this.props.params.pageID));
  }

  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(unsetDetailPage());
  }

  render() {
    const { currDetailPage, bookmarks } = this.props;
    return (
      <div>
        {
          currDetailPage ?
            <div>
              <PageDetail {...currDetailPage} />
              <BookmarkButton currPage={currDetailPage} bookmarks={bookmarks}/>
            </div>
          :
            <LoadingSpinner/>
        }
      </div>
    );
  }
}

PageDetailContainer.propTypes = {
  currDetailPage: PropTypes.object,
  params: React.PropTypes.shape({
    pageID: React.PropTypes.string
  }),
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => ({
  currDetailPage: state.pageDetail.currDetailPage,
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps)(PageDetailContainer);