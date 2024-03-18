


import React from "react";

export const TriangleDownIcon = ({ color }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            transform="rotate(180)"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1799_3)">
                <path d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_1799_3">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};