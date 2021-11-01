import React from "react";

interface IProps {
  width?: number;
  height?: number;
}

const AppIconUser = ({ width = 24, height = 24 }: IProps): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-user'>
      <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
      <circle cx={12} cy={7} r={4} />
    </svg>
  );
};

export default AppIconUser;
