import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestPageDetails, unsetDetailPage } from '../actions/actions.js';
import PageDetail from '../components/PageDetail.js';
import BookmarkButton from '../containers/BookmarkButton.js'


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
    const { currDetailPage } = this.props;
    return (
      <div>
        {currDetailPage ?
            <div>
              <PageDetail {...currDetailPage} />
              <BookmarkButton currPage={currDetailPage} />
            </div>
          :
            <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>

        }
      </div>
    );
  }
}

PageDetailContainer.propTypes = {
  currDetailPage: PropTypes.object,
  params: React.PropTypes.shape({
    pageID: React.PropTypes.number
  }),
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => ({
  currDetailPage: state.pageDetail.currDetailPage,
})

export default connect(mapStateToProps)(PageDetailContainer);