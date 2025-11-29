# Troubleshooting Guide

Common issues and solutions for HireSphere development.

## Installation & Setup Issues

### Issue: npm install fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock file
rm -r node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use
**Solution:**
```bash
# On Windows PowerShell
Get-Process -Name node | Stop-Process -Force

# Or change port in vite.config.js
# server: { port: 3001 }
```

### Issue: VITE_API_BASE_URL not working
**Ensure `.env.local` exists:**
```bash
cp .env.example .env.local
# Then edit .env.local with your values
```

## Development Issues

### Issue: Hot Module Replacement (HMR) not working
**Solution:**
1. Check if port 3000 is accessible
2. Clear browser cache (Ctrl+Shift+Delete)
3. Restart dev server: `npm run dev`
4. Try incognito/private window

### Issue: ESLint errors won't go away
**Solution:**
```bash
npm run lint:fix
# If still failing, check specific rules in eslint.config.js
```

### Issue: Import paths showing as errors
**Solution:**
- Use `@/path/to/file` instead of relative paths
- Example: `import { apiClient } from '@/utils/api';`
- This alias is configured in `vite.config.js`

### Issue: Components not updating on state change
**Check:**
1. Are you using `useState`?
2. Are you passing dependencies to `useEffect`?
3. Check React DevTools for component updates
4. Verify no console errors

## Build Issues

### Issue: Build fails with errors
**Solution:**
```bash
# Clear Vite cache
rm -r node_modules/.vite

# Try building again
npm run build

# Check for actual errors in output
npm run lint  # Check for lint errors first
```

### Issue: Production build works locally but fails on deploy
**Check:**
1. Environment variables set correctly
2. API endpoints correct for production
3. Console for CORS errors
4. Check `.env` vs `.env.local`

### Issue: Bundle size too large
**Optimization:**
- Check what's in `dist/` folder
- Use code splitting in `vite.config.js`
- Remove unused dependencies
- Check React DevTools for unnecessary re-renders

## API & Network Issues

### Issue: API calls returning 401 (Unauthorized)
**Possible causes:**
1. Token expired - Re-login
2. Invalid credentials - Check .env variables
3. CORS issue - Check backend CORS config
4. API not running - Start backend server

### Issue: API calls timing out
**Solution:**
- Increase `VITE_API_TIMEOUT` in `.env.local`
- Check backend server status
- Check network connectivity
- Look for network errors in DevTools

### Issue: CORS errors in console
**Solution (Backend):**
- Add your frontend URL to CORS whitelist
- Set proper headers in backend
- Example: `Access-Control-Allow-Origin: http://localhost:3000`

## Component Issues

### Issue: ErrorBoundary catching all errors
**Solution:**
- Check error details in console
- Verify component props are correct
- Check for null/undefined values
- Use browser DevTools debugger

### Issue: LoadingSpinner not showing
**Check:**
1. Is it being rendered conditionally?
2. CSS classes not overridden?
3. Parent container has dimensions?
4. Check z-index if hidden behind content

## Performance Issues

### Issue: App loads slowly
**Optimization:**
1. Check DevTools Network tab
2. Enable code splitting for large components
3. Remove unused dependencies
4. Check for console warnings

### Issue: Excessive re-renders
**Solution:**
1. Use React DevTools Profiler
2. Memoize components if needed
3. Check state management
4. Use `useCallback` for event handlers

## State Management Issues

### Issue: State not persisting on refresh
**Solution:**
- Use `useLocalStorage` hook for persistence
- Or implement proper session management
- Check if localStorage is enabled

### Issue: Navigation not working
**Check:**
1. Is `useViewNavigation` hook used correctly?
2. Check `navigate()` being called
3. Verify view names match `VIEW_TYPES`
4. Check browser console for errors

## Git & Version Control

### Issue: Git merge conflicts
**Solution:**
```bash
# Check conflicts
git diff

# Resolve manually or use:
git mergetool

# Then commit
git add .
git commit -m "Resolve merge conflicts"
```

### Issue: Accidentally committed node_modules
**Solution:**
```bash
git rm -r --cached node_modules
echo "node_modules/" >> .gitignore
git commit -m "Remove node_modules from git"
```

## Browser Compatibility

### Issue: App works in Chrome but not in Safari/Firefox
**Solution:**
1. Check JavaScript syntax (use transpiled code)
2. Check CSS compatibility
3. Use polyfills if needed
4. Test in multiple browsers regularly

## Debug Tips

### Enable Debug Mode
```javascript
// In .env.local
VITE_ENABLE_DEBUG_MODE=true
```

### Browser DevTools
1. **Console** - Check for errors and warnings
2. **Network** - Monitor API calls
3. **Application** - Check localStorage and cookies
4. **React DevTools** - Check component hierarchy
5. **Debugger** - Set breakpoints and step through code

### Useful Console Commands
```javascript
// Check configuration
import { API_CONFIG, APP_CONFIG } from '@/constants/config';
console.log(API_CONFIG, APP_CONFIG);

// Check localStorage
Object.keys(localStorage).forEach(key => {
  console.log(key, localStorage.getItem(key));
});
```

## Still Having Issues?

1. **Check Documentation** - Review DEVELOPMENT.md
2. **Search Issues** - Look for similar problems on GitHub
3. **Create New Issue** - Provide:
   - Error message
   - Steps to reproduce
   - Environment (Node version, OS, Browser)
   - Screenshots/logs

## Getting Help

- GitHub Issues: Report bugs
- Discussions: Ask questions
- Email: Contact team for urgent issues
- Check CONTRIBUTING.md for contribution guidelines

---

Last Updated: November 2025
