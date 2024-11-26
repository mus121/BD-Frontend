type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Followingcheck({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 12 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.3657 0.234229C11.5157 0.384251 11.5999 0.587698
           11.5999 0.799829C11.5999 1.01196 11.5157 1.21541 11.3657
            1.36543L4.96568 7.76543C4.81566 7.91541 4.61221 7.99966
            4.40008 7.99966C4.18795 7.99966 3.9845 7.91541 3.83448 
            7.76543L0.634482 4.56543C0.488755 4.41455 0.40812 4.21247
            0.409942 4.00271C0.411765 3.79295 0.4959 3.5923 0.644227 
            3.44397C0.792553 3.29565 0.993203 3.21151 1.20296 3.20969C1.41272
            3.20787 1.6148 3.2885 1.76568 3.43423L4.40008 6.06863L10.2345 
            0.234229C10.3845 0.0842524 10.588 0 10.8001 0C11.0122 0 11.2157 
            0.0842524 11.3657 0.234229Z'
          fill='#FF9E69'
        />
      </svg>
    </span>
  );
}

export default Followingcheck;
