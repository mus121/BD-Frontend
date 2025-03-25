type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function LeftChevron({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 10 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.5 15L1.5 8L8.5 1'
          stroke='#ADADAD'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </span>
  );
}

export default LeftChevron;
