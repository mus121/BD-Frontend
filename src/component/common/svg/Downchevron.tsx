type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Downchevron({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 16 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.7998 11.7008L5.5998 7.50078L9.7998 3.30078'
          stroke='#C1C1C1'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  );
}

export default Downchevron;
