import React from "react";

export const FilterIcon = ({ color }) => {
 return (
  <svg
   width="16"
   height="16"
   viewBox="0 0 16 16"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
  >
   <g clipPath="url(#clip0_1799_3)">
    <path
     d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
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
