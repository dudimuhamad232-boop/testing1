
import React from 'react';

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z" />
    <path d="M18 10h.01" />
    <path d="M12 21a6 6 0 0 0-9-9a9 9 0 1 1 9 9Z" />
    <path d="M6 14h.01" />
    <path d="M12 3v.01" />
    <path d="M12 8v.01" />
    <path d="M12 12v.01" />
    <path d="M12 16v.01" />
    <path d="M12 21v.01" />
    <path d="M3 12h.01" />
    <path d="M8 12h.01" />
    <path d="M16 12h.01" />
    <path d="M21 12h.01" />
  </svg>
);
