/**
 * @module Utils
 * @description Utility functions for class name management
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines and merges class names using clsx and tailwind-merge
 *
 * @description
 * This utility function combines multiple class names or conditional class expressions
 * and merges them efficiently, handling Tailwind CSS conflicts appropriately.
 *
 * @example
 * ```tsx
 * // Basic usage
 * cn('px-4', 'py-2', 'bg-blue-500')
 *
 * // With conditions
 * cn('px-4', isActive && 'bg-blue-500', isBig ? 'text-lg' : 'text-base')
 *
 * // With Tailwind conflicts resolution
 * cn('px-2 py-1 bg-red-500', 'px-4 bg-blue-500') // px-4 and bg-blue-500 win
 * ```
 *
 * @param {...ClassValue[]} inputs - Class names or conditional expressions to be merged
 * @returns {string} Merged class names string with resolved Tailwind conflicts
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
