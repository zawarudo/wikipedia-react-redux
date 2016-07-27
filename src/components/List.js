import React from 'react';
import { Link } from 'react-router';
import LoadingSpinner from './LoadingSpinner';

const List = (props) => {
  const {items} = props;
  if(!items || !items.length) { return <LoadingSpinner />; }

  return (
    <ul className="list-group center-block">
      {items.map(
        item =>
          <Link
            to={{ pathname: `page/${item.id}` }}
            key={item.id}
          >
            <li
              className="list-group-item"
            >
              <b>
                {item.title ? item.title : 'No Title'}
              </b>
              <span className="glyphicon glyphicon-chevron-right pull-right"></span>
            </li>
          </Link>
      )}
    </ul>
  );
}

export default List;