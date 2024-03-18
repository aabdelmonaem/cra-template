import React, { forwardRef } from "react";
import PropTypes from "prop-types";

export const WidgetExpand = forwardRef(
  ({ color, size, title, ...rest }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        fill="none"
        width={size}
        height={size}
        {...rest}
      >
         {title ? <title>{title}</title> : null}
        <g clipPath="url(#clip0_2668_32)">
          <path
            d="M11 0H4.00005C3.45015 0 3 0.449707 3 1.00005V8.0001C3 8.54971 3.45015 9 4.00005 9H11C11.5499 9 12 8.54971 12 8.0001V1.00005C12 0.449707 11.5499 0 11 0ZM11 8.0001H4.00005V1.00005H11V8.0001Z"
            fill={color}
          />
          <path
            d="M10 4.50046L9.999 2.50007C9.99944 2.22421 9.77596 2.00056 9.49948 2.00012H7.49953V2.75012L8.71828 2.75056L4.99995 6.46877L5.52929 6.99993L9.24943 3.28037L9.249 4.50002L10 4.50046ZM4.99995 9.99993V11.0001H1.00005V6.99993H1.99995V6.00002H0.499951C0.225147 6.00002 0 6.22502 0 6.50012V11.4999C0 11.7749 0.225147 12 0.499951 12H5.50005C5.77485 12 6 11.7749 6 11.4999V9.99993H4.99995Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_2668_32">
            <rect
              width="12"
              height="12"
              fill={color}
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
WidgetExpand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

WidgetExpand.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null,
};
