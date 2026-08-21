import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * shadcn/ui class-name helper — merges conditional class lists and resolves
 * Tailwind conflicts (last-wins). Used by the shadcn-style UI primitives.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
