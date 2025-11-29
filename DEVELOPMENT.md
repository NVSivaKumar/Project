# Development Best Practices

This document outlines best practices for developing the HireSphere application.

## Code Organization

### File Structure
- Place components in `src/` with `.jsx` extension
- Use folders for feature grouping (e.g., `pages/`, `components/`)
- Keep utilities in `utils/` folder
- Store constants in `constants/` folder
- Create custom hooks in `hooks/` folder

### Naming Conventions
- **Components**: PascalCase (e.g., `UserDashboard.jsx`)
- **Functions/Variables**: camelCase (e.g., `handleUserClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Files**: Match the main export (e.g., `UserDashboard.jsx` exports `UserDashboard`)

## React Best Practices

### Component Structure
```jsx
// 1. Imports
import React from 'react';
import { useViewNavigation } from '@/hooks';

// 2. Component
function MyComponent({ prop1, prop2 }) {
  const [state, setState] = React.useState(null);

  return <div>{state}</div>;
}

// 3. Export
export default MyComponent;
```

### Hooks
- Use custom hooks for reusable logic (see `useViewNavigation`, `useLocalStorage`)
- Keep hooks in `src/hooks/` folder
- Name hooks with `use` prefix
- Document hook behavior with JSDoc comments

### Props
- Avoid passing too many props (use destructuring)
- Use default props for optional values
- Document props with PropTypes or JSDoc comments

## State Management

### When to Use
- **useState**: Simple, component-level state
- **Custom Hooks**: Shared logic across components
- **Props**: Parent-to-child communication
- **Context** (future): Global state (authentication, theme)

## Performance

### Optimization Tips
- Use React.memo for expensive components
- Implement lazy loading for routes
- Minimize re-renders with useCallback
- Use keys in lists (never use index as key)
- Code split with dynamic imports

### Example:
```jsx
const LazyComponent = React.lazy(() => import('./ExpensiveComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <LazyComponent />
    </React.Suspense>
  );
}
```

## Error Handling

### API Errors
- Use the `apiClient` utility for consistent error handling
- Implement try-catch for async operations
- Display user-friendly error messages

### Component Errors
- Wrap app with `ErrorBoundary` component
- Log errors to console in development
- Show fallback UI to users

## Testing

### Best Practices
- Write tests for utilities and hooks first
- Test component behavior, not implementation
- Use descriptive test names
- Mock API calls in tests

## Code Quality

### ESLint
- Run `npm run lint` before committing
- Use `npm run lint:fix` to auto-fix issues
- Address all ESLint warnings

### Code Review Checklist
- [ ] Code follows naming conventions
- [ ] No console.log statements in production code
- [ ] Comments explain the "why", not the "what"
- [ ] Error handling is implemented
- [ ] No hardcoded values (use constants)
- [ ] Props are validated

## Git Workflow

### Commit Messages
- Use present tense: "Add feature" not "Added feature"
- Be descriptive but concise
- Reference issues: "Fix #123"

Example:
```
Fix login form validation
- Update email regex pattern
- Add password strength indicator
- Closes #42
```

### Branch Naming
- Feature: `feature/user-dashboard`
- Bug fix: `fix/login-validation`
- Improvement: `improvement/api-error-handling`

## Common Patterns

### Navigation
```jsx
const { navigate, navigateBack } = useViewNavigation();

// Navigate to new view
navigate('user-dashboard');

// Go back to previous view
navigateBack();
```

### API Calls
```jsx
import { apiClient } from '@/utils/api';

const response = await apiClient.get('/users/profile');
const data = await apiClient.post('/bookings', bookingData);
```

### Local Storage
```jsx
const [userPreferences, setPreferences, clearPreferences] = useLocalStorage(
  'userPrefs',
  {}
);
```

## Debugging

### Tips
- Use React DevTools browser extension
- Check Network tab for API calls
- Use console.warn for warnings (visible in dev mode)
- Set breakpoints in VS Code debugger
- Enable `VITE_ENABLE_DEBUG_MODE` in `.env.local`

## Performance Monitoring

### Development
- Use Vite's built-in performance metrics
- Check bundle size with `npm run build`
- Monitor console for warnings

### Production
- Set up error tracking (e.g., Sentry)
- Monitor API response times
- Track user interactions

## Security

### Guidelines
- Never hardcode sensitive data
- Use environment variables for secrets
- Validate user input on the client and server
- Sanitize data before displaying
- Use HTTPS in production
- Set up CORS properly

---

For questions or clarifications, refer to the main README.md or create an issue on GitHub.
