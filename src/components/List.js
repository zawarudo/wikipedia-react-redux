import React from 'react';
import { Link } from 'react-router';
import LoadingSpinner from './LoadingSpinner';

const List = (props) => {
  const { items, postItems } = props;

  if(!items || !items.length) { return <LoadingSpinner />; }
  return (
    <ul className="list-group center-block">
      {items.map(
        item =>
          <Link
            to={{ pathname: item.pathname }}
            key={item.id}
            onClick={item.onClick}
          >
            <li
              className="list-group-item"
            >
              <b>
                {item.content ? item.content : 'No Content'}
              </b>
              {item.postItems}
            </li>
          </Link>
      )}
    </ul>
  );
}

export default List;