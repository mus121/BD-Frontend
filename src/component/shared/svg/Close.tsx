type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Close({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.83325 7.8335L16.1666 16.1668'
          stroke='#C1C1C1'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.83325 16.1668L16.1666 7.8335'
          stroke='#C1C1C1'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  );
}

export default Close;
