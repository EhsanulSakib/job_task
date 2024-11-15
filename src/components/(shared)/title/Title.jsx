import React from 'react';

const Title = ({ title, style }) => {
  return (
    <h2 className={`${style} mt-2`}>
      {title}
    </h2>
  );
};

export default Title;