import React, { Component } from 'react';
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
      <section>
        <div 
          className="btn btn-primary" 
          onClick={() => dispatch(invalidatePages())}
        >
          Get random pages
        </div>
        <div>
          {renderPages(wikiPages.pages)}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  wikiPages: state.wikiPages
});

export default connect(mapStateToProps)(PagesContainer);