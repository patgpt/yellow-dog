# Class Names Utility (cn)

The `cn` utility is a powerful function that combines [clsx](https://github.com/lukeed/clsx) and [tailwind-merge](https://github.com/dcastil/tailwind-merge) to provide efficient class name management with Tailwind CSS.

## Installation

The utility is pre-installed in the template. It uses:

- `clsx` for conditional class names
- `tailwind-merge` for Tailwind class deduplication

## Usage

```tsx
import { cn } from '@/utils/cn'

// Basic usage
<div className={cn('px-4 py-2 bg-blue-500')} />

// With conditions
<button
  className={cn(
    'px-4 py-2', // base classes
    isActive && 'bg-blue-500', // conditional class
    isBig ? 'text-lg' : 'text-base' // ternary operator
  )}
>
  Click me
</button>

// Merging with conflicts
<div
  className={cn(
    'px-2 py-1 bg-red-500', // base classes
    'px-4 bg-blue-500' // overrides (px-4 and bg-blue-500 win)
  )}
/>
```

## API Reference

```typescript
function cn(...inputs: ClassValue[]): string
```

### Parameters

- `...inputs`: Any number of class values that can include:
  - Strings
  - Objects where keys are class names and values are booleans
  - Arrays of class names
  - Nested arrays/objects
  - Falsy values (automatically ignored)

### Returns

- A string of merged and deduplicated class names

## Examples

### Basic Classes

```tsx
cn('font-bold', 'text-lg')
// => 'font-bold text-lg'
```

### Conditional Classes

```tsx
cn('text-base', isLarge && 'text-lg')
// => 'text-base text-lg' if isLarge is true
// => 'text-base' if isLarge is false
```

### Object Syntax

```tsx
cn({
  'bg-blue-500': isPrimary,
  'bg-gray-500': !isPrimary,
  'text-white': true
})
```

### Tailwind Conflict Resolution

```tsx
cn('bg-red-500 px-2 py-2', 'bg-blue-500 px-4')
// => 'py-2 px-4 bg-blue-500'
// Later classes override earlier ones
```

### Complex Components

```tsx
function Button({ variant, size, className }) {
  return (
    <button
      className={cn(
        // Base styles
        'rounded-lg font-medium transition-colors',
        // Variant styles
        variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        // Size styles
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'lg' && 'px-6 py-3 text-lg',
        // Additional custom classes
        className
      )}
    >
      Click me
    </button>
  )
}
```

## Best Practices

1. **Order Matters**: Put base classes first, followed by conditional classes, and custom overrides last.
2. **Avoid Inline Objects**: For better performance, define static objects outside the render function.
3. **Use with TypeScript**: The utility is fully typed for better development experience.
4. **Component Props**: When creating components, accept a `className` prop for customization.

## TypeScript Support

The utility is fully typed and works well with TypeScript's type checking:

```typescript
import { cn } from '@/utils/cn'

// All of these are type-safe
cn('string')
cn('string', true && 'conditional')
cn(['array', 'of', 'strings'])
cn({ 'conditional-class': boolean })
```
