import * as React from 'react';
import { SVGProps } from 'react';

const SvgBulb = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <path d="M12.5 2.88c-.46 0-.93.04-1.4.14-2.75.53-4.96 2.77-5.47 5.52-.46 2.45.37 4.73 1.93 6.28.58.58.95 1.34.95 2.16v2.14c0 1.66 1.34 3 3 3h1.99c1.66 0 3-1.34 3-3v-2.15c0-.81.36-1.57.94-2.14a6.99 6.99 0 0 0 2.06-4.96c0-3.87-3.13-7-7-7Zm2.25 16.25c0 .69-.56 1.25-1.25 1.25h-1.99c-.69 0-1.25-.56-1.25-1.25v-.87h4.5v.87Zm1.45-5.53c-.82.81-1.29 1.83-1.4 2.91h-4.6a4.88 4.88 0 0 0-1.41-2.92c-1.24-1.24-1.77-2.97-1.44-4.73a5.187 5.187 0 0 1 5.15-4.23c2.89 0 5.25 2.36 5.25 5.25 0 1.4-.55 2.72-1.55 3.72Z" />
    <path d="M12.5 6c-2.14 0-3.88 1.74-3.88 3.88 0 .48.39.88.88.88s.88-.39.88-.88c0-1.17.95-2.12 2.12-2.12.48 0 .88-.39.88-.88S12.99 6 12.5 6Z" />
  </svg>
);
export default SvgBulb;
