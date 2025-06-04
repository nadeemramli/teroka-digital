# Component Library

This directory contains all reusable components for the Teroka Digital website. The structure is organized to support systematic development and maintainability.

## Directory Structure

```
src/components/
├── base/                 # Base layout components
│   ├── Header/          # Site header with navigation
│   ├── Footer/          # Site footer
│   ├── Navigation/      # Main navigation components
│   └── Layout/          # Layout wrappers and containers
│
├── sections/            # Reusable page sections
│   ├── Hero/           # Hero sections for different page types
│   ├── Features/       # Feature showcases
│   ├── Pricing/        # Pricing tables and packages
│   ├── Contact/        # Contact forms and information
│   ├── Testimonials/   # Client testimonials
│   ├── FAQ/            # FAQ sections
│   └── CTA/            # Call-to-action sections
│
├── templates/           # Page template components
│   ├── landing/        # Landing page templates
│   │   ├── Home/      # Homepage specific
│   │   ├── Industry/  # Industry pages
│   │   └── Location/  # Location pages
│   ├── service/        # Service page templates
│   ├── resource/       # Resource page templates
│   └── utility/        # Utility page templates
│
├── ui/                 # Reusable UI components
│   ├── buttons/        # Button variants
│   ├── forms/          # Form elements
│   ├── cards/          # Card components
│   ├── modals/         # Modal dialogs
│   └── icons/          # Icon components
│
├── utils/              # Utility components
│   ├── LanguageSwitcher/  # Language selection
│   ├── CookieNotice/      # Cookie consent
│   ├── ThemeToggle/       # Theme switching
│   └── ScrollToTop/       # Scroll to top button
│
└── shared/             # Shared components across categories
    ├── SEO/            # SEO components
    ├── Analytics/      # Analytics components
    └── ErrorBoundary/  # Error handling
```

## Component Guidelines

### Naming Conventions
- Use PascalCase for component files and directories
- Use kebab-case for CSS module files
- Suffix component files with `.tsx`
- Suffix style files with `.module.scss`

Example:
```
Button/
├── Button.tsx
├── Button.module.scss
└── index.ts
```

### Component Structure
Each component should:
1. Have its own directory
2. Include an index.ts file for exports
3. Use CSS modules for styling
4. Include TypeScript interfaces
5. Be documented with JSDoc comments

### Component Categories

#### Base Components
- Core layout components used across all pages
- Handle site-wide functionality
- Include navigation and structural elements

#### Section Components
- Reusable page sections
- Self-contained with their own styles
- Configurable through props
- Follow consistent spacing and layout rules

#### Template Components
- Page-specific templates
- Combine section components
- Handle page-level logic
- Manage page-specific state

#### UI Components
- Small, reusable interface elements
- Follow design system guidelines
- Support multiple variants
- Include accessibility features

#### Utility Components
- Handle specific functionality
- Often used across multiple pages
- Manage cross-cutting concerns
- Include language and theme support

## Usage Guidelines

1. **Component Creation**
   - Create new components in appropriate category
   - Follow naming conventions
   - Include necessary documentation
   - Add TypeScript interfaces

2. **Component Usage**
   - Import from index files
   - Use TypeScript for type safety
   - Follow prop interface definitions
   - Include necessary accessibility attributes

3. **Styling**
   - Use CSS modules
   - Follow design system variables
   - Maintain responsive design
   - Support dark/light themes

4. **Testing**
   - Include unit tests
   - Test accessibility
   - Verify responsive behavior
   - Check cross-browser compatibility

## Development Workflow

1. **Creating New Components**
   ```bash
   # Create component directory
   mkdir -p src/components/{category}/{ComponentName}
   
   # Create component files
   touch src/components/{category}/{ComponentName}/{ComponentName}.tsx
   touch src/components/{category}/{ComponentName}/{ComponentName}.module.scss
   touch src/components/{category}/{ComponentName}/index.ts
   ```

2. **Component Updates**
   - Update documentation
   - Maintain backward compatibility
   - Update tests
   - Update changelog

3. **Component Removal**
   - Check for dependencies
   - Update imports
   - Remove from documentation
   - Update changelog 