import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Icon size in pixels */
  size?: number | string;
  /** Additional CSS classes */
  className?: string;
  /** Fill color - defaults to 'currentColor' */
  fill?: string;
  /** Stroke color - defaults to 'currentColor' */
  stroke?: string;
} 