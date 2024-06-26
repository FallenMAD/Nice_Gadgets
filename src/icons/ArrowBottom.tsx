import { FC } from 'react';

/* eslint-disable max-len */
type Props = {
  color?: string;
};

export const ArrowBottom: FC<Props> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4714 5.52864C12.7317 5.78899 12.7317 6.2111 12.4714 6.47145L8.47136 10.4714C8.21101 10.7318 7.7889 10.7318 7.52855 10.4714L3.52855 6.47144C3.2682 6.2111 3.2682 5.78899 3.52855 5.52864C3.7889 5.26829 4.21101 5.26829 4.47136 5.52864L7.99996 9.05723L11.5286 5.52864C11.7889 5.26829 12.211 5.26829 12.4714 5.52864Z"
        fill={color}
      />
    </svg>
  );
};

ArrowBottom.defaultProps = {
  color: '#b4bdc4',
};
