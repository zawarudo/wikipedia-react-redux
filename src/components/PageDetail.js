import React, {PropTypes} from 'react';

const PageDetail = (props) => {
  const { title = "NO TITLE", categories = [{}], images = [{}] } = props;

  const renderCategories = (categories) =>
    categories.map((category) =>
      <div
        className="well col-xs-12 col-md-4 text-center category-item"
        key={category.title}
      >
        <span className="label label-info">
          <span>{category.title}</span>
        </span>
      </div>
    );

  const renderImages = (images) =>
    images.map((image) =>
      <div
        className="col-xs-12 col-md-4"
        key={image.title}
        >
        <span
          className="label label-default col-xs-12 text-center"
          >
          {image.title}
        </span>
        <div className="well col-xs-12 detail-img-container">
          <a href={image.imageinfo[0].url} target="_blank">
            <img
              className="img-responsive center-block detail-img"
              src={image.imageinfo[0].thumburl}
              alt={image.title} />
          </a>
        </div>
      </div>
    );

  return (
    <div className="container detail-page">
      <h2 className="row text-center">{title}</h2>
      <div className="row">
        {renderImages(images)}
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-12 center-block text-center categories-container">
          <h3>
            Categories
          </h3>
          {renderCategories(categories)}
        </div>
      </div>
    </div>
  );
};

PageDetail.PropTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.object.isRequired
}

export default PageDetail;