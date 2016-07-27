import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestPages, invalidatePages } from '../actions/actions.js';
import List from '../components/List';

class PagesContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestPages());
  }

  render() {
    const { wikiPages, dispatch } = this.props;
    return (
      <div className="row text-center">
        <h2>Wiki Pages</h2>
        <hr />
        <div className="row">
          <div className="col-xs-12 center-block">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(invalidatePages())}
            >
              Get Random Pages
            </button>
          </div>
        </div>
        <div className="row">
          <div className="pages-container">
            <List items={wikiPages.pages}/>
          </div>
        </div>
      </div>
    );
  }
}

PagesContainer.PropTypes = {
  wikiPages: React.PropTypes.shape({
    pages: React.PropTypes.array.isRequired
  }),
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  wikiPages: state.wikiPages
})

export default connect(mapStateToProps)(PagesContainer);