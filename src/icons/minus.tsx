const MinusIcon = ({ className = "" }) => {
  return (
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
      className={`lucide lucide-minus-icon lucide-minus ${className}`}
    >
      <path d="M5 12h14" />
    </svg>
  );
};

export default MinusIcon;
