type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function LeftArrowSvg({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 20 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 15L1 8M1 8L8 1M1 8H19'
          stroke='#ADADAD'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </span>
  );
}

export default LeftArrowSvg;
