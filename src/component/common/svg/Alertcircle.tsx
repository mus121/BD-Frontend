type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Alertcircle({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_2885_1841)'>
          <path
            d='M8.00032 1.33317C4.31843 1.33317 1.33366 4.31794 1.33366 
            7.99984C1.33366 11.6817 4.31843 14.6665 8.00033 14.6665C11.6822
             14.6665 14.667 11.6817 14.667 7.99984C14.667 4.31794 11.6822 1.33317 8.00032 1.33317Z'
            stroke='#868686'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8 10.6665L8 7.99984'
            stroke='#868686'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8 5.3335L7.99333 5.3335'
            stroke='#868686'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_2885_1841'>
            <rect
              width='16'
              height='16'
              fill='white'
              transform='translate(16 16) rotate(180)'
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}

export default Alertcircle;
