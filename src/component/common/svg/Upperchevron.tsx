type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Upperchevron({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 10 7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M9.76983 6.29062C9.47125 6.57772 8.99647 6.56841 8.70937 6.26983L5 2.33208L1.29062 6.26983C1.00353 6.56841 0.528747 6.57772 0.230167 6.29062C-0.0684109 6.00353 -0.0777207 5.52875 0.209374 5.23017L4.45937 0.730167C4.60078 0.583108 4.79599 0.499999 5 0.499999C5.20401 0.499999 5.39922 0.583108 5.54062 0.730167L9.79062 5.23017C10.0777 5.52875 10.0684 6.00353 9.76983 6.29062Z'
          fill='#868686'
        />
      </svg>
    </span>
  );
}

export default Upperchevron;
