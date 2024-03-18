// icon:window-plus | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';


export const IconWindowPlus = forwardRef(({
    color, size, title, ...rest
}, ref) => {
    return (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width={size}
            height={size}
            fill={color}
            {...rest}
        >
            {title ? <title>{title}</title> : null}
            <path d="M2.5 5a.5.5 0 100-1 .5.5 0 000 1zM4 5a.5.5 0 100-1 .5.5 0 000 1zm2-.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
            <path d="M0 4a2 2 0 012-2h11a2 2 0 012 2v4a.5.5 0 01-1 0V7H1v5a1 1 0 001 1h5.5a.5.5 0 010 1H2a2 2 0 01-2-2V4zm1 2h13V4a1 1 0 00-1-1H2a1 1 0 00-1 1v2z" />
            <path d="M16 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-3.5-2a.5.5 0 00-.5.5v1h-1a.5.5 0 000 1h1v1a.5.5 0 001 0v-1h1a.5.5 0 000-1h-1v-1a.5.5 0 00-.5-.5z" />
        </svg>
    );
});

IconWindowPlus.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
};

IconWindowPlus.defaultProps = {
    color: 'currentColor',
    size: '1em',
    title: null,
};
