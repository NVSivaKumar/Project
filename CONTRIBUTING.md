# Contributing to HireSphere

Thank you for your interest in contributing to HireSphere! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on code quality and user experience
- Help others learn and grow

## Getting Started

### 1. Fork the Repository
Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/stage1-main.git
cd stage1-main
```

### 3. Add Upstream Remote
```bash
git remote add upstream https://github.com/NVSivaKumar/stage1-main.git
```

### 4. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

## Development Workflow

### 1. Make Your Changes
- Follow the [Development Best Practices](DEVELOPMENT.md)
- Keep commits atomic and focused
- Write clear commit messages

### 2. Run Tests and Lint
```bash
npm run lint
npm run lint:fix  # Auto-fix issues
npm run build     # Test build
```

### 3. Test Your Changes
- Manually test in development: `npm run dev`
- Test on production build: `npm run build && npm run preview`
- Test on different browsers if possible

### 4. Keep Your Branch Updated
```bash
git fetch upstream
git rebase upstream/main
```

### 5. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request
- Go to GitHub and create a PR from your fork
- Provide a clear title and description
- Link related issues using #issue-number
- Ensure all checks pass

## Pull Request Guidelines

### Title Format
```
[Type] Brief description (50 chars or less)
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Description Template
```markdown
## Description
Brief description of what this PR does.

## Related Issues
Closes #123

## Changes
- Change 1
- Change 2
- Change 3

## Testing
How to test these changes:
1. Step 1
2. Step 2

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] No console.log statements
- [ ] Documentation updated
- [ ] No breaking changes
```

## Types of Contributions

### Bug Reports
1. Check if the bug already exists in Issues
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment (browser, OS, versions)
   - Screenshots if applicable

### Feature Requests
1. Check if the feature already exists
2. Create an issue with:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach
   - Examples of similar features

### Code Contributions
1. Small fixes (typos, minor bugs): Create PR directly
2. Features: Create an issue first for discussion
3. Large changes: Discuss in an issue before starting

### Documentation
- Update README.md for major changes
- Update DEVELOPMENT.md for process changes
- Add JSDoc comments to functions
- Create helpful guides for complex features

## Code Style

### Follow These Standards
- ESLint configuration (run `npm run lint:fix`)
- Use 2-space indentation
- Use single quotes for strings
- Add semicolons
- Use camelCase for variables/functions
- Use PascalCase for components/classes

### Example
```jsx
// Good
function handleUserLogin(email, password) {
  const { token } = await apiClient.post('/auth/login', {
    email,
    password,
  });
  return token;
}

// Bad
function handleUserLogin(email, password) {
  var {token} = await apiClient.post('/auth/login', {email, password})
  return token
}
```

## Commit Message Guidelines

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Examples
```
feat(auth): add password reset functionality

Implement password reset flow with email verification.

Closes #42
```

```
fix(dashboard): correct chart rendering issue

Update chart library version and fix responsive layout.

Fixes #156
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test updates
- `chore`: Build, deps, etc.

## Review Process

### What to Expect
1. At least one maintainer review
2. Automated checks must pass
3. Code quality tools must pass
4. Tests must pass (when available)

### Reviewer Feedback
- Be open to constructive criticism
- Ask for clarification if needed
- Make requested changes
- Push additional commits (don't force-push during review)

### Approval and Merge
- PRs need at least one approval
- Squash and merge preferred for clean history
- Maintainers will handle merging

## Questions?

- Check the [FAQ](#faq) section
- Review past issues and PRs
- Ask in issues or discussions
- Refer to [DEVELOPMENT.md](DEVELOPMENT.md)

## Recognition

Contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Thanked in issue discussions

---

Happy contributing! 🎉
