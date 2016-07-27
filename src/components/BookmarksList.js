import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const BookmarksList = (props) => {
  const { bookmarks } = props;
  console.log(bookmarks);
  if(!bookmarks || !bookmarks.length) {
    return <div>No Bookmarks Here!</div>
  } else {
    return (
      <div>
        { bookmarks.map((bookmark) =>
          <div>
            <Link
              to={`/page/${bookmark.pageid}`}
            >
              <span>
                {bookmark.title}
              </span>
            </Link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {' '}
              <span className="glyphicon glyphicon-remove"></span>
            </a>
          </div>
        )}
      </div>
    )
  }
};

export default BookmarksList;