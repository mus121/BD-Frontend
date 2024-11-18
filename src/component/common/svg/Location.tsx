type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Location({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12
           7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z'
          stroke='#999999'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 
          12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z'
          stroke='#999999'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  );
}

export default Location;
