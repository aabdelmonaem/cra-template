import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const ChevronLeft = forwardRef(({
  color, size, title, ...rest
}, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"
      />
    </svg>
  );
});

ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

ChevronLeft.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

