import type { IconProps } from "./types";

export function DepositIcon({
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
    >
      <path
        fill="currentColor"
        d="M18.645 24.61H5.68a2.62 2.62 0 0 1-2.617-2.618v-7.738a2.62 2.62 0 0 1 2.617-2.617h12.965a2.62 2.62 0 0 1 2.617 2.617v7.738a2.62 2.62 0 0 1-2.617 2.617M5.68 13.277a.98.98 0 0 0-.977.976v7.738a.98.98 0 0 0 .977.977h12.965a.98.98 0 0 0 .977-.977v-7.738a.98.98 0 0 0-.977-.976z"
      />
      <path
        fill="currentColor"
        d="M22.321 20.192h-1.879a.82.82 0 1 1 0-1.64h1.88a.98.98 0 0 0 .975-.978V9.837a.98.98 0 0 0-.976-.978H9.356a.98.98 0 0 0-.977.977v2.62a.82.82 0 0 1-1.64 0v-2.62A2.62 2.62 0 0 1 9.356 7.22H22.32a2.62 2.62 0 0 1 2.616 2.618v7.737a2.62 2.62 0 0 1-2.616 2.618"
      />
      <path
        fill="currentColor"
        d="M20.442 18.746H3.882a.82.82 0 0 1-.82-.82v-2.755a.82.82 0 0 1 .82-.82h16.56a.82.82 0 0 1 .82.82v2.755a.82.82 0 0 1-.82.82m-15.739-1.64h14.919V15.99H4.703z"
      />
    </svg>
  );
}

DepositIcon.displayName = "DepositIcon";
