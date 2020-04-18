import React from "react"

export default props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 300 150"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        fill="currentColor"
        d="M74.847 0L0 75l74.847 75 74.847-75L74.847 0zM225.153 0l-74.847 75 74.847 75L300 75 225.153 0z"
      ></path>
      <path
        fill="#fff"
        d="M150 7.078L82.217 75 150 142.922 217.783 75 150 7.078z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M75.153 75L150 0l74.847 75L150 150 75.153 75zm14.128 0L150 135.843 210.719 75 150 14.157 89.28 75z"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h300v150H0V0z"></path>
      </clipPath>
    </defs>
  </svg>
)
