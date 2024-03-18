import React, { forwardRef } from "react";
import PropTypes from "prop-types";

export const WidgetCollapse = forwardRef(
  ({ color, size, title, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        fill="none"
        width={size}
        height={size}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        <g clipPath="url(#clip0_2668_36)">
          <path
            d="M0 11L0 4.00005C0 3.45015 0.449707 3 1.00005 3L8.0001 3C8.54971 3 9 3.45015 9 4.00005V11C9 11.5499 8.54971 12 8.0001 12H1.00005C0.449707 12 0 11.5499 0 11ZM8.0001 11V4.00005H1.00005L1.00005 11H8.0001Z"
            fill={color}
          />
          <path
            d="M4.50043 10L2.50004 9.999C2.22418 9.99944 2.00053 9.77596 2.00009 9.49948V7.49953H2.75009L2.75053 8.71828L6.46874 4.99995L6.9999 5.52929L3.28034 9.24943L4.49999 9.249L4.50043 10ZM9.9999 4.99995H11.0001V1.00005L6.9999 1.00005V1.99995H5.99999V0.499951C5.99999 0.225147 6.22499 0 6.50009 0L11.4999 0C11.7748 0 12 0.225147 12 0.499951V5.50005C12 5.77485 11.7748 6 11.4999 6H9.9999V4.99995Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_2668_36">
            <rect
              width="12"
              height="12"
              fill={color}
              transform="matrix(0 1 1 0 0 0)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

WidgetCollapse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

WidgetCollapse.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null,
};
