import * as React from "react";

function Logo(props) {
  return (
    <svg
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 10.41 10.41"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={679.89}
          y1={428.51}
          x2={802.6}
          y2={425.6}
          gradientTransform="rotate(45 702.175 428.97)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ff7bac" />
          <stop offset={0.22} stopColor="#ff7bac" stopOpacity={0.76} />
          <stop offset={0.6} stopColor="#ff7bac" stopOpacity={0.36} />
          <stop offset={0.87} stopColor="#ff7bac" stopOpacity={0.1} />
          <stop offset={1} stopColor="#ff7bac" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={679.79}
          y1={424.2}
          x2={802.5}
          y2={421.3}
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__c"
          x1={679.89}
          y1={428.68}
          x2={802.6}
          y2={425.78}
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__d"
          x1={680}
          y1={432.99}
          x2={802.71}
          y2={430.09}
          xlinkHref="#prefix__a"
        />
      </defs>
      <path
        d="M703.49 423.77l-5.2 5.2a5.19 5.19 0 015.2-5.2z"
        transform="translate(-698.29 -423.77)"
        fill="url(#prefix__a)"
      />
      <path
        d="M708.7 429l-5.21-5.2a5.22 5.22 0 015.21 5.2z"
        transform="translate(-698.29 -423.77)"
        fill="url(#prefix__b)"
      />
      <path
        d="M707.17 432.65a5.14 5.14 0 01-3.67 1.52l5.2-5.2a5.17 5.17 0 01-1.53 3.68z"
        transform="translate(-698.29 -423.77)"
        fill="url(#prefix__c)"
      />
      <path
        d="M703.5 434.17a5.17 5.17 0 01-5.21-5.2z"
        transform="translate(-698.29 -423.77)"
        fill="url(#prefix__d)"
      />
    </svg>
  );
}

export default Logo;
