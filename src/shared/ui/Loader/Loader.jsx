import React from 'react';
import ReactLoading from 'react-loading';

export const Loader = ({
  width = '200px',
  height = '200px',
  ...otherProps
}) => {
  return (
    <ReactLoading
      {...otherProps}
      type="spinningBubbles"
      color="var(--text-color)"
      width={width}
      height={height}
    />
  );
};
