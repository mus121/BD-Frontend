type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function RightChevron({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width='6'
        height='11'
        viewBox='0 0 6 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 9.5L1 5.5L5 1.5'
          stroke='#ADADAD'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </span>
  );
}

export default RightChevron;
