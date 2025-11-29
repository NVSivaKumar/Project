# 🚀 Quick Start Guide

Get up and running with HireSphere in 5 minutes!

## ⚡ Installation (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env.local

# 3. Start development
npm run dev
```

That's it! Open `http://localhost:3000` in your browser.

## 📖 Essential Commands

```bash
# Development
npm run dev          # Start dev server (HMR enabled)

# Building
npm run build        # Production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix code issues

# Deployment
npm run deploy       # Deploy to GitHub Pages
```

## 🔑 Key Features to Know

### 1. **Use the API Client**
```jsx
import { apiClient } from '@/utils/api';

// Instead of fetch:
const users = await apiClient.get('/users');
await apiClient.post('/users', newUser);
```

### 2. **Manage Views with Hook**
```jsx
import { useViewNavigation } from '@/hooks';

function App() {
  const { currentView, navigate, navigateBack } = useViewNavigation();
  
  return (
    <div>
      <button onClick={() => navigate('dashboard')}>
        Go to Dashboard
      </button>
    </div>
  );
}
```

### 3. **Persist Data Locally**
```jsx
import { useLocalStorage } from '@/hooks';

function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
```

### 4. **Validate Forms**
```jsx
import { validateEmail, validatePassword } from '@/utils/validators';

// Validate email
if (!validateEmail(userEmail)) {
  setError('Invalid email format');
}

// Check password strength
const { isValid, strength } = validatePassword(userPassword);
console.log(`Password strength: ${strength}`);
```

### 5. **Use Import Aliases**
```jsx
// Instead of: import { config } from '../../../constants/config'
import { API_CONFIG, VIEW_TYPES } from '@/constants/config';
import { apiClient } from '@/utils/api';
import { useViewNavigation } from '@/hooks';
```

## 📁 Project Structure

```
src/
├── App.jsx                    # Main app component
├── main.jsx                   # Entry point
├── assets/                    # Images, fonts, etc.
├── constants/
│   └── config.js              # App configuration
├── utils/
│   ├── api.js                 # API client
│   └── validators.js          # Form validators
├── hooks/
│   ├── useViewNavigation.js   # Navigation state
│   ├── useLocalStorage.js     # Local storage
│   └── index.js               # Exports
├── components/
│   ├── ErrorBoundary.jsx      # Error handling
│   ├── LoadingSpinner.jsx     # Loading UI
│   └── index.js               # Exports
├── *Page.jsx                  # Page components
├── *.jsx                      # Other components
└── *.css                      # Styles
```

## 🔧 Environment Setup

Edit `.env.local`:

```env
# API
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000

# Environment
VITE_ENV=development

# Features
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG_MODE=false
```

## 📚 Documentation

- **DEVELOPMENT.md** - Best practices & patterns
- **CONTRIBUTING.md** - How to contribute
- **TROUBLESHOOTING.md** - Common issues & fixes
- **SETUP.md** - Detailed setup guide
- **IMPROVEMENTS.md** - All improvements made

## 🐛 Quick Debugging

### Check if API works
```javascript
// In browser console:
import { apiClient } from '@/utils/api';
apiClient.get('/health').then(console.log);
```

### View configuration
```javascript
import { API_CONFIG, APP_CONFIG } from '@/constants/config';
console.log(API_CONFIG, APP_CONFIG);
```

### Clear local storage
```javascript
localStorage.clear();
location.reload();
```

## ✅ Checklist Before Starting

- [ ] Node.js 18+ installed
- [ ] Repository cloned
- [ ] `npm install` completed
- [ ] `.env.local` configured
- [ ] `npm run dev` works
- [ ] Browser shows app at localhost:3000

## 🆘 Need Help?

1. **Check TROUBLESHOOTING.md** for common issues
2. **Review DEVELOPMENT.md** for patterns
3. **Look at existing code** for examples
4. **Create GitHub issue** if stuck

## 💡 Pro Tips

1. Use `@/` imports instead of relative paths
2. Run `npm run lint:fix` before committing
3. Check browser DevTools for errors
4. Use React DevTools extension
5. Read code comments in utils

## 🎯 First Task

1. Open a page component (e.g., `LoginPage.jsx`)
2. Try using the new `apiClient`:
   ```jsx
   import { apiClient } from '@/utils/api';
   const data = await apiClient.get('/endpoint');
   ```
3. Use `useViewNavigation` for navigation
4. Validate forms with validators

---

**Happy coding! 🎉**

For more details, check the full documentation files.
