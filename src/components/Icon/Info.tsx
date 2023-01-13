import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <path d="M12.5 3.5a9 9 0 1 0 .001 18.001A9 9 0 0 0 12.5 3.5Zm0 16.25c-4 0-7.25-3.25-7.25-7.25S8.5 5.25 12.5 5.25s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25Z" />
    <path d="M11.5 8h2v2h-2zM11.5 12h2v5h-2z" />
  </svg>
);
export default SvgInfo;
