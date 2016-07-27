import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestPages, invalidatePages } from '../actions/actions.js';
import { Link } from 'react-router';

const renderPages = (pages = []) => pages.map(
  page =>
    <div key={page.id}>
      <Link to={{ pathname: `page/${page.id}` }}>
        {page.title ? page.title : 'page'}
      </Link>
    </div>
)

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
          <div className="col-xs-12">
            {renderPages(wikiPages.pages)}
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