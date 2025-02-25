import type { IconProps } from "./types";

export function MastercardIcon({
  size = 24,
  width = 44,
  height = 30,
  className,
  "aria-hidden": ariaHidden = true,
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 30"
      className={className}
      aria-hidden={ariaHidden}
      {...props}
    >
      <circle cx="15" cy="15" r="15" fill="#9199AF" fillOpacity=".5" />
      <circle cx="29" cy="15" r="15" fill="#9199AF" fillOpacity=".5" />
    </svg>
  );
}

MastercardIcon.displayName = "MastercardIcon";
