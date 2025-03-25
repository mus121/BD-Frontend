type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function RightChevron({ size = 24 }: ListUserProps) {
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
          d='M9 5L16 12L9 19'
          stroke='#ADADAD'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </span>
  );
}

export default RightChevron;
