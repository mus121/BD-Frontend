type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Home({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17.1 7.19956C17.2182 7.19959 17.3352 7.17633 17.4445 7.13111C17.5537 7.08589 17.6529 7.0196 17.7365 6.93602C17.82 6.85244 17.8863 6.75322 17.9316 6.64401C17.9768 6.5348 18 6.41776 18 6.29956V3.59956C18.0001 3.41072 17.9407 3.22665 17.8303 3.07346C17.7198 2.92027 17.564 2.80575 17.3848 2.74614L9.28477 0.0461424C9.09991 -0.0153808 8.90009 -0.0153808 8.71523 0.0461424L0.615231 2.74614C0.436044 2.80575 0.280178 2.92027 0.169745 3.07346C0.0593129 3.22665 -7.75185e-05 3.41072 7.59368e-08 3.59956V6.29956C-3.06676e-05 6.41776 0.0232276 6.5348 0.068446 6.64401C0.113664 6.75322 0.179957 6.85244 0.263535 6.93602C0.347114 7.0196 0.446342 7.08589 0.555549 7.13111C0.664756 7.17633 0.781802 7.19959 0.9 7.19956H1.8V13.6654C1.27506 13.8503 0.820229 14.1932 0.497941 14.6469C0.175652 15.1006 0.00171223 15.643 7.59368e-08 16.1996V17.9996C-3.06676e-05 18.1178 0.0232276 18.2348 0.068446 18.344C0.113664 18.4532 0.179957 18.5524 0.263535 18.636C0.347114 18.7196 0.446342 18.7859 0.555549 18.8311C0.664756 18.8763 0.781802 18.8996 0.9 18.8996H17.1C17.2182 18.8996 17.3352 18.8763 17.4445 18.8311C17.5537 18.7859 17.6529 18.7196 17.7365 18.636C17.82 18.5524 17.8863 18.4532 17.9316 18.344C17.9768 18.2348 18 18.1178 18 17.9996V16.1996C17.9983 15.643 17.8243 15.1006 17.5021 14.6469C17.1798 14.1932 16.7249 13.8503 16.2 13.6654V7.19956H17.1ZM16.2 17.0996H1.8V16.1996C1.80024 15.9609 1.89514 15.7322 2.06387 15.5634C2.2326 15.3947 2.46138 15.2998 2.7 15.2996H15.3C15.5386 15.2998 15.7674 15.3947 15.9361 15.5634C16.1049 15.7322 16.1998 15.9609 16.2 16.1996V17.0996ZM3.6 13.4996V7.19956H5.4V13.4996H3.6ZM7.2 13.4996V7.19956H10.8V13.4996H7.2ZM12.6 13.4996V7.19956H14.4V13.4996H12.6ZM1.8 5.39956V4.24819L9 1.84789L16.2 4.24819V5.39956H1.8Z'
          fill='#727272'
        />
      </svg>
    </span>
  );
}

export default Home;