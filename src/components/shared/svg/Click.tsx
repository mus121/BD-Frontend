type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Click({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width='16'
        height='12'
        viewBox='0 0 16 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.6673 1L5.50065 10.1667L1.33398 6'
          stroke='#868686'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </span>
  );
}

export default Click;
