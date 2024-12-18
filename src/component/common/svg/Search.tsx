type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Search({ size = 12 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14 14L11.5415 11.5415'
          stroke='#5E5E5E'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 7.586C2 10.6711 4.50094 13.172 7.586 13.172C10.6711
           13.172 13.172 10.6711 13.172 7.586C13.172 4.50094 10.6711
            2 7.586 2V2C4.50103 2.00023 2.00023 4.50103 2 7.586'
          stroke='#5E5E5E'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  );
}

export default Search;
