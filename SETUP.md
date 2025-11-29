# HireSphere - Professional Service Marketplace

A modern React application for connecting customers with professional service providers. Built with React, Vite, and optimized for performance.

## 🚀 Features

- **User Dashboard** - Customers can browse and book professional services
- **Professional Dashboard** - Service providers can manage their profile, services, and earnings
- **Booking Management** - Track bookings and manage availability
- **Secure Authentication** - Login and signup with validation
- **Customer Support** - Built-in support ticketing, bug reporting, and live chat
- **Performance Analytics** - Professionals can track their performance metrics
- **Payment Integration** - Billing and earnings management
- **Security Settings** - User account security and privacy controls

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Git (for version control)

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/NVSivaKumar/stage1-main.git
cd stage1-main
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and configure:
- `VITE_API_BASE_URL` - Your API backend URL
- `VITE_ENV` - Environment (development, staging, production)
- `VITE_ENABLE_DEBUG_MODE` - Enable debug logging

## 💻 Development

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000` with hot module replacement enabled.

## 📦 Building

Build for production:
```bash
npm run build
```

This creates an optimized build in the `dist` folder with:
- Code minification and tree-shaking
- Vendor code splitting
- Source map generation for debugging

Preview production build:
```bash
npm run preview
```

## 🧹 Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

## 📂 Project Structure

```
src/
├── constants/        # App constants and configuration
├── hooks/           # Custom React hooks
├── utils/           # Utility functions (API client, helpers)
├── assets/          # Images, fonts, and other static files
├── App.jsx          # Main app component with routing
├── main.jsx         # React entry point
└── [Page components] # Page components (LoginPage, DashboardPage, etc.)
```

## 🔑 Key Improvements

1. **Environment Configuration** - `.env.example` for easy setup
2. **API Client Utility** - Centralized HTTP requests with timeout handling
3. **Constants Management** - Reusable configuration constants
4. **Custom Hooks** - `useViewNavigation` and `useLocalStorage` for state management
5. **Enhanced ESLint** - Stricter rules for code quality
6. **Vite Optimization** - Code splitting, minification, and production optimizations
7. **Alias Import** - Use `@` for src directory imports

## 🚀 Deployment

### Deploy to GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This runs the build and deploys to the `gh-pages` branch.

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Support

For support, feature requests, or bug reports:
- Open an issue on GitHub
- Use the in-app bug report feature
- Contact support through the customer support page
