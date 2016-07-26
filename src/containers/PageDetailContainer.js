import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestPageDetails, unsetDetailPage } from '../actions/actions.js';
import PageDetail from '../components/PageDetail.js';

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
        {currDetailPage
          ? <PageDetail {...currDetailPage} />
          : <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
        }
      </div>
    );
  }
}

PageDetailContainer.propTypes = {
  currDetailPage: PropTypes.object.isRequired,
  params: React.PropTypes.shape({
    pageID: React.PropTypes.number.isRequired
  }),
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currDetailPage: state.pageDetail.currDetailPage,
})

export default connect(mapStateToProps)(PageDetailContainer);