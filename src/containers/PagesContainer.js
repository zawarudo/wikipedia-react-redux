import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestPages, refreshPages, invalidatePages, wikiSearch } from '../actions/actions';
import List from '../components/List';
import SearchForm from '../containers/SearchForm';

class PagesContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestPages());
  }

  render() {
    const { wikiPages, dispatch } = this.props;

    const modifyPagesToList = (wikiPages) => {
      const { pages } = wikiPages;
      if(!pages) { return }

      // Set pathname param
      const pathname = (page) => ({ ...page, pathname: `/page/${page.id}` });
      // Set content param
      const content = (page) => ({ ...page, content: page.title });

      const postItemsCreator = (item) => (
        <span className="glyphicon glyphicon-chevron-right pull-right"></span>
      );

      const postItems = (item) => ({ ...item, postItems: postItemsCreator(item)});

      return pages
              .map(pathname)
              .map(content)
              .map(postItems);
    }

    return (
      <div className="row text-center">
        <h2>Wiki Pages</h2>
        <hr />
        <div className="row">
          <div className="col-xs-12 center-block">
            <SearchForm onSubmit={(input) => {dispatch(wikiSearch(input.searchTerm))}}/>
            <h4>OR</h4>
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
            <List items={modifyPagesToList(wikiPages)}/>
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
  wikiPages: state.wikiPages,
  search: state.search
})

export default connect(mapStateToProps)(PagesContainer);