import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <path d="m21.26 7.46-3.72-3.72c-.19-.19-.45-.29-.7-.29s-.51.1-.7.29l-12.1 12.1v5.12h5.12l12.1-12.1a.984.984 0 0 0 0-1.4ZM8.41 19.16H5.83v-2.58l8.04-8.04 2.58 2.58-8.04 8.04Zm9.31-9.31-2.58-2.58 1.69-1.69 2.58 2.58-1.69 1.69Z" />
  </svg>
);
export default SvgPencil;
