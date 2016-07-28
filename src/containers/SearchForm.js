import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class SearchForm extends Component {
  render() {
    const {fields: {searchTerm}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-group col-xs-12 col-md-6 col-md-offset-3">
          <input type="text" className="form-control" placeholder="Wiki Search!" {...searchTerm} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Go!</button>
          </span>
        </div>
      </form>
    );
  }
}

export default reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'wiki-search',                           // a unique name for this form
  fields: ['searchTerm'] // all the fields in your form
})(SearchForm);