type ListUserProps = {
  // eslint-disable-next-line react/require-default-props
  size?: number;
};

function Calendar({ size = 24 }: ListUserProps) {
  return (
    <span style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 
          0.48043 6 0.734784 6 1H12C12 0.734784 12.1054 0.48043 12.2929 
          0.292893C12.4804 0.105357 12.7348 0 13 0C13.2652 0 13.5196 
          0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 
          1H16C16.5304 1 17.0391 1.21071 17.4142 1.58579C17.7893 1.96086 
          18 2.46957 18 3V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 
          19.7893 16.5304 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 
          19.4142C0.210714 19.0391 0 18.5304 0 18V3C0 2.46957 0.210714 1.96086
          0.585786 1.58579C0.960859 1.21071 1.46957 1 2 1H4C4 0.734784 4.10536 0.48043 
          4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0ZM9 7C8.73478 7 8.48043 7.10536
          8.29289 7.29289C8.10536 7.48043 8 7.73478 8 8C8 8.26522 8.10536 8.51957 
          8.29289 8.70711C8.48043 8.89464 8.73478 9 9 9C9.26522 9 9.51957 8.89464 
          9.70711 8.70711C9.89464 8.51957 10 8.26522 10 8C10 7.73478 9.89464 
          7.48043 9.70711 7.29289C9.51957 7.10536 9.26522 7 9 7ZM6 8C6 7.20435
          6.31607 6.44129 6.87868 5.87868C7.44129 5.31607 8.20435 5 9 5C9.79565 
          5 10.5587 5.31607 11.1213 5.87868C11.6839 6.44129 12 7.20435 12 8C12
          8.79565 11.6839 9.55871 11.1213 10.1213C10.5587 10.6839 9.79565 11 
          9 11C8.20435 11 7.44129 10.6839 6.87868 10.1213C6.31607 9.55871 
          6 8.79565 6 8ZM6.851 14.348C6.388 14.558 6.101 14.858 5.949 
          15.316C5.86519 15.5677 5.68483 15.7758 5.4476 15.8945C5.21036 
          16.0132 4.93569 16.0328 4.684 15.949C4.43231 15.8652 4.22422 
          15.6848 4.10551 15.4476C3.9868 15.2104 3.96719 14.9357 4.051
          14.684C4.399 13.641 5.111 12.942 6.024 12.527C6.897 12.13 7.935 
          12 9 12C10.065 12 11.103 12.13 11.976 12.527C12.888 12.942 
          13.601 13.641 13.949 14.684C14.0328 14.9357 14.0132 15.2104 
          13.8945 15.4476C13.7758 15.6848 13.5677 15.8652 13.316 15.949C13.0643 
          16.0328 12.7896 16.0132 12.5524 15.8945C12.3152 15.7758 12.1348 15.5677 
          12.051 15.316C11.899 14.859 11.611 14.558 11.149 14.348C10.647 14.12 9.935
          14 9 14C8.065 14 7.353 14.12 6.851 14.348Z'
          fill='#3F83F8'
        />
      </svg>
    </span>
  );
}

export default Calendar;