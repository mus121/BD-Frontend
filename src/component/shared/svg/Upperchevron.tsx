type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Upperchevron({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width='20'
        height='21'
        viewBox='0 0 20 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.7698 13.2906C14.4713 13.5777 13.9965 
          13.5684 13.7094 13.2698L10 9.33208L6.29062 
          13.2698C6.00353 13.5684 5.52875 13.5777 5.23017 
          13.2906C4.93159 13.0035 4.92228 12.5287 5.20937
           12.2302L9.45937 7.73017C9.60078 7.58311 9.79599
            7.5 10 7.5C10.204 7.5 10.3992 7.58311 10.5406 
            7.73017L14.7906 12.2302C15.0777 12.5287 15.0684 13.0035 14.7698 13.2906Z'
          fill='#868686'
        />
      </svg>
    </span>
  );
}

export default Upperchevron;
