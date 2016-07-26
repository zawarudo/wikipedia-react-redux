import React, {PropTypes} from 'react';

const PageDetail = (props) => {
  const { title = "NO TITLE", categories = [{}], images = [{}] } = props;

  const renderCategories = (categories) => 
    categories.map((category) => 
      <span key={category.title}>{category.title}</span>
    );

  const renderImages = (images) =>
    images.map((image) =>
      <span key={image.title}>{image.title}</span>
    );

  return (
    <div>
      <h2>{title}</h2>
      <div>{renderImages(images)}</div>
      <div>{renderCategories(categories)}</div>
    </div>
  );
};

PageDetail.PropTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.object.isRequired
}

export default PageDetail;