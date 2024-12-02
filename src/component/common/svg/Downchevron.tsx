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
        viewBox='0 0 20 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.23017 7.70938C5.52875 7.42228 6.00353
           7.43159 6.29063 7.73017L10 11.6679L13.7094 
           7.73017C13.9965 7.43159 14.4713 7.42228 14.7698
            7.70938C15.0684 7.99647 15.0777 8.47125 14.7906 
            8.76983L10.5406 13.2698C10.3992 13.4169 10.204 
            13.5 10 13.5C9.79599 13.5 9.60078 13.4169 9.45938
             13.2698L5.20938 8.76983C4.92228 8.47125 4.93159 7.99647 5.23017 7.70938Z'
          fill='#868686'
        />
      </svg>
    </span>
  );
}

export default Downchevron;
