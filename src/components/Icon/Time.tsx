import * as React from 'react';
import { SVGProps } from 'react';

const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <path d="M12.5 3.5a9 9 0 1 0 .001 18.001A9 9 0 0 0 12.5 3.5Zm0 16.1c-3.92 0-7.1-3.19-7.1-7.1s3.19-7.1 7.1-7.1 7.1 3.19 7.1 7.1-3.19 7.1-7.1 7.1Z" />
    <path d="M12.99 7.56h-2.06v6.47l5.02 2.41.89-1.85-3.85-1.85V7.56z" />
  </svg>
);
export default SvgTime;
