import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <path d="M6.82 6.45 17.3 12.5 6.82 18.55V6.45M5.94 4c-.48 0-.92.38-.92.92v15.16c0 .54.44.92.92.92.15 0 .31-.04.46-.12l13.13-7.58a.92.92 0 0 0 0-1.59L6.39 4.12A.88.88 0 0 0 5.93 4Z" />
  </svg>
);
export default SvgPlay;
