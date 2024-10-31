
import React from 'react';

const Image = ({ image, alt }) => {
  return <img src={image} alt={alt} style={{ width: '150px' }} />;
};

export default Image;

