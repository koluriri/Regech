import * as React from 'react';
import { SVGProps } from 'react';

const SvgRankingOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <path
      style={{
        fill: '#d1b336',
      }}
      d="M6.94 21.5h13.59L23 5.5l-6.6 3.33-3.9-6.33-3.9 6.33L2 5.5l2.47 16h2.47z"
    />
    <path
      d="M12.53 11.92h-1.61v-1.09c.44 0 .79-.04 1.06-.11.27-.08.48-.2.64-.37s.3-.42.42-.75h1.04v9.8h-1.54v-7.48Z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
export default SvgRankingOne;
