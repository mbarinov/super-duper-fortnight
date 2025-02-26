import type { IconProps } from "./types";

export function ChevronRightIcon({
  size = 24,
  className,
  "aria-hidden": ariaHidden = true,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      aria-hidden={ariaHidden}
      {...props}
      fill="none"
    >
      <path
        d="M8 5L15.57 11.6237C15.7976 11.8229 15.7976 12.1771 15.57 12.3763L8 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

ChevronRightIcon.displayName = "ChevronRightIcon";
