# Teroka Digital Design System

This document defines the design system for Teroka Digital, ensuring consistency across all components and pages.

## Core Principles

1. **Professional & Trustworthy**
   - Clean, modern design
   - Clear hierarchy
   - Consistent spacing
   - Professional typography

2. **Accessible & Inclusive**
   - WCAG 2.1 AA compliance
   - Multi-language support (EN, MY, CN)
   - Responsive design
   - Clear contrast ratios

3. **Business-Focused**
   - Clear call-to-actions
   - Easy navigation
   - Professional imagery
   - Industry-specific elements

## Color System

### Brand Colors
```scss
// Primary Brand Colors
--brand-strong: #1A365D;    // Deep blue for trust
--brand-medium: #2B6CB0;    // Medium blue for interaction
--brand-weak: #4299E1;      // Light blue for accents

// Secondary Colors
--accent-strong: #2F855A;   // Green for success/positive
--accent-medium: #48BB78;   // Medium green for highlights
--accent-weak: #9AE6B4;     // Light green for backgrounds

// Neutral Colors
--neutral-strong: #1A202C;  // Dark gray for text
--neutral-medium: #4A5568;  // Medium gray for secondary text
--neutral-weak: #A0AEC0;    // Light gray for borders
```

### Semantic Colors
```scss
// Success States
--success-strong: #2F855A;
--success-medium: #48BB78;
--success-weak: #9AE6B4;

// Warning States
--warning-strong: #C05621;
--warning-medium: #ED8936;
--warning-weak: #FBD38D;

// Error States
--error-strong: #C53030;
--error-medium: #E53E3E;
--error-weak: #FC8181;

// Info States
--info-strong: #2B6CB0;
--info-medium: #4299E1;
--info-weak: #90CDF4;
```

## Typography

### Font Families
```scss
// Primary Font
--font-primary: 'Inter', system-ui, sans-serif;

// Secondary Font (for headings)
--font-secondary: 'Poppins', system-ui, sans-serif;

// Monospace Font (for code)
--font-mono: 'JetBrains Mono', monospace;
```

### Type Scale
```scss
// Headings
--heading-1: 3.052rem;    // 48.83px
--heading-2: 2.441rem;    // 39.06px
--heading-3: 1.953rem;    // 31.25px
--heading-4: 1.563rem;    // 25px
--heading-5: 1.25rem;     // 20px
--heading-6: 1rem;        // 16px

// Body Text
--body-xl: 1.25rem;       // 20px
--body-l: 1.125rem;       // 18px
--body-m: 1rem;           // 16px
--body-s: 0.875rem;       // 14px
--body-xs: 0.75rem;       // 12px
```

### Font Weights
```scss
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Spacing System

### Base Unit
```scss
--base-unit: 4px;
```

### Spacing Scale
```scss
--space-1: 0.25rem;   // 4px
--space-2: 0.5rem;    // 8px
--space-3: 0.75rem;   // 12px
--space-4: 1rem;      // 16px
--space-5: 1.25rem;   // 20px
--space-6: 1.5rem;    // 24px
--space-8: 2rem;      // 32px
--space-10: 2.5rem;   // 40px
--space-12: 3rem;     // 48px
--space-16: 4rem;     // 64px
--space-20: 5rem;     // 80px
--space-24: 6rem;     // 96px
```

## Component Guidelines

### Buttons
```scss
// Primary Button
.button-primary {
  background: var(--brand-strong);
  color: white;
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-m);
  font-weight: var(--font-medium);
  
  &:hover {
    background: var(--brand-medium);
  }
}

// Secondary Button
.button-secondary {
  background: transparent;
  color: var(--brand-strong);
  border: 2px solid var(--brand-strong);
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-m);
  font-weight: var(--font-medium);
  
  &:hover {
    background: var(--brand-weak);
  }
}
```

### Cards
```scss
// Base Card
.card {
  background: white;
  border-radius: var(--radius-l);
  padding: var(--space-6);
  box-shadow: var(--shadow-m);
  
  // Card Variants
  &.card-hover {
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-4px);
    }
  }
  
  &.card-bordered {
    border: 1px solid var(--neutral-weak);
  }
}
```

### Forms
```scss
// Input Fields
.input {
  padding: var(--space-4);
  border: 1px solid var(--neutral-weak);
  border-radius: var(--radius-m);
  font-size: var(--body-m);
  
  &:focus {
    border-color: var(--brand-medium);
    outline: none;
    box-shadow: 0 0 0 2px var(--brand-weak);
  }
}

// Form Labels
.label {
  font-size: var(--body-s);
  font-weight: var(--font-medium);
  color: var(--neutral-strong);
  margin-bottom: var(--space-2);
}
```

## Layout Guidelines

### Grid System
```scss
// Container Widths
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

// Grid Columns
--grid-cols-1: 1;
--grid-cols-2: 2;
--grid-cols-3: 3;
--grid-cols-4: 4;
--grid-cols-6: 6;
--grid-cols-12: 12;
```

### Breakpoints
```scss
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

## Animation & Transitions

### Durations
```scss
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

### Easing
```scss
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

## Component Implementation Guidelines

1. **Base Components**
   - Use Once UI components where possible
   - Extend with our design system variables
   - Maintain accessibility features
   - Support dark/light themes

2. **Section Components**
   - Follow consistent spacing
   - Use semantic HTML
   - Implement responsive design
   - Include proper ARIA labels

3. **Template Components**
   - Combine section components
   - Handle page-level state
   - Implement proper meta tags
   - Support multi-language

4. **Utility Components**
   - Keep functionality focused
   - Ensure reusability
   - Document props and usage
   - Include error handling

## Usage Examples

### Creating a New Component
```tsx
import { Flex, Text } from '@/once-ui/components';
import styles from './ComponentName.module.scss';

interface ComponentNameProps {
  title: string;
  description?: string;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  description,
}) => {
  return (
    <Flex
      direction="column"
      gap="4"
      padding="6"
      background="surface"
      radius="m"
    >
      <Text variant="heading-4" onBackground="neutral-strong">
        {title}
      </Text>
      {description && (
        <Text variant="body-m" onBackground="neutral-medium">
          {description}
        </Text>
      )}
    </Flex>
  );
};
```

### Component Styling
```scss
// ComponentName.module.scss
.component {
  // Use design system variables
  padding: var(--space-6);
  background: var(--surface);
  border-radius: var(--radius-m);
  
  // Responsive design
  @media (max-width: var(--breakpoint-md)) {
    padding: var(--space-4);
  }
  
  // Dark mode support
  @media (prefers-color-scheme: dark) {
    background: var(--surface-dark);
  }
}
```

## Implementation Checklist

For each new component:
- [ ] Follow design system variables
- [ ] Implement responsive design
- [ ] Add accessibility features
- [ ] Support dark/light themes
- [ ] Include proper documentation
- [ ] Add TypeScript interfaces
- [ ] Create unit tests
- [ ] Update changelog 