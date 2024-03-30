# MNML 2
Fullstack GraphQl + react unstyled framework

# Setup

1. install visual studio code and setup devcontainers
1. select reopen in dev container when it pops up

# Start developing
1. run `terminal > open terminal`
1. run `cd frontend/backend`
1. run `npm start`


# Organization
- frontend
  - react application
- backend
  - GraphQl application

# Code style
- lint on save with eslint should be configured in visual studio code

# Frontend
All code is in the `src` folder

## Primitives
MNML's component library
Unique, repeated patterns of ui within the application.

### Primitive File Layout
See `primitives/Grid` for an example

- PascalCaseFolder
 - index.tsx (barrel file )
 - PascalCaseReactComponent.tsx
 - OtherComponents.tsx
 - someState.tsx
 - someHook.tsx

### Creating a basic Primitive Component
1. define an interface for the props
props in MNML should only be used for configuring the component. To bring data into a component a hook should be used instead.

```typescript
export interface GridProps {
  // props
  sx: SerializedStyles // TODO: change type
}
```

2. Each component file can define multiple `@emotion/styled` components on an as needed basis. use `Root` as the name for a base styled component for consistency
```typescript
// any is used here for custom values without defining a new type. Probably a better way
const Root = styled('div')(({ columns, rows, gap, sx }: any) => {
  return {
    rows, // prop from the parent component
    gap, // prop from the parent component
    // styling
    ...sx // override styling (possibly will be replaced with the css prop)
  }
});
```

3. type your components,

```typescript
export const Grid: FC<GridProps> = (props) => {
  const childCount = Children.count(props.children)
  const {
    children,
    columns,
    sx
  } = props;

  return (
    <Root
      sx={sx.root} // use keys to change styles for a single component
      columns={c}
      rows={r}
    >
      {children}
    </Root>
  )
}
```

## Features
groupings of related logic/components

## Images
Images go here

## Utils
Unique utility functions

## Utils/hooks
Unique utility React hooks
