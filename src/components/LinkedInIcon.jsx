function LinkedInIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <circle cx="7.4" cy="7.7" r="1" fill="currentColor" stroke="none" />
      <path d="M7.4 11v6.3M11.5 17.3V11m0 2.7c0-1.7 1.1-2.7 2.7-2.7 1.8 0 2.8 1.1 2.8 3v3.3" />
    </svg>
  );
}

export default LinkedInIcon;
