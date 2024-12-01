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
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='24'
          height='24'
          rx='4'
          fill='#373737'
        />
        <path
          // eslint-disable-next-line max-len
          d='M17.8332 7C17.6122 7 17.4003 7.0878 17.244 7.24408C17.0877 7.40036 16.9999 7.61232 16.9999 7.83333V11.1667C16.9999 11.3877 16.9121 11.5996 16.7558 11.7559C16.5996 11.9122 16.3876 12 16.1666 12H8.17491L9.25825 10.925C9.41517 10.7681 9.50332 10.5553 9.50332 10.3333C9.50332 10.1114 9.41517 9.89859 9.25825 9.74167C9.10133 9.58475 8.8885 9.49659 8.66658 9.49659C8.44466 9.49659 8.23183 9.58475 8.07491 9.74167L5.57491 12.2417C5.49905 12.3209 5.43958 12.4144 5.39991 12.5167C5.31657 12.7196 5.31657 12.9471 5.39991 13.15C5.43958 13.2523 5.49905 13.3457 5.57491 13.425L8.07491 15.925C8.15238 16.0031 8.24455 16.0651 8.3461 16.1074C8.44765 16.1497 8.55657 16.1715 8.66658 16.1715C8.77659 16.1715 8.88551 16.1497 8.98706 16.1074C9.08861 16.0651 9.18078 16.0031 9.25825 15.925C9.33635 15.8475 9.39835 15.7554 9.44066 15.6538C9.48296 15.5523 9.50475 15.4433 9.50475 15.3333C9.50475 15.2233 9.48296 15.1144 9.44066 15.0129C9.39835 14.9113 9.33635 14.8191 9.25825 14.7417L8.17491 13.6667H16.1666C16.8296 13.6667 17.4655 13.4033 17.9343 12.9344C18.4032 12.4656 18.6666 11.8297 18.6666 11.1667V7.83333C18.6666 7.61232 18.5788 7.40036 18.4225 7.24408C18.2662 7.0878 18.0543 7 17.8332 7Z'
          fill='#868686'
        />
      </svg>
    </span>
  );
}

export default Upperchevron;
