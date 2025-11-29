/**
 * Application Configuration
 * Centralized constants for the application
 */

export const API_CONFIG = {
  // Use explicit VITE_API_BASE_URL when set; otherwise use a relative `/api` so
  // dev proxy (Vite) will forward requests to the backend and avoid CORS/mixed-content.
  BASE_URL: import.meta.env.VITE_API_BASE_URL || '/api',
  TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000', 10),
};

export const APP_CONFIG = {
  NAME: 'HireSphere',
  VERSION: '1.0.0',
  ENV: import.meta.env.VITE_ENV || 'development',
};

export const FEATURE_FLAGS = {
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  ENABLE_DEBUG_MODE: import.meta.env.VITE_ENABLE_DEBUG_MODE === 'true',
};

export const USER_TYPES = {
  CUSTOMER: 'customer',
  PROFESSIONAL: 'professional',
  ADMIN: 'admin',
};

export const VIEW_TYPES = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  DASHBOARD: 'dashboard',
  USER_DASHBOARD: 'user-dashboard',
  PROFESSIONAL_DASHBOARD: 'professional-dashboard',
  PROFILE: 'profile',
  EDIT_PROFILE: 'edit-profile',
  SECURITY: 'security',
  BILLING: 'billing',
  BOOKINGS: 'bookings',
  MANAGE_SERVICES: 'manage-services',
  SCHEDULE_AVAILABILITY: 'schedule-availability',
  EDIT_PRO_PROFILE: 'edit-pro-profile',
  EARNINGS: 'earnings-payments-pro',
  CLIENT_REVIEWS: 'client-reviews',
  PERFORMANCE_ANALYTICS: 'performance-analytics',
  SUPPORT: 'support',
  SUBMIT_TICKET: 'submit-ticket',
  REPORT_BUG: 'report-bug',
  LIVE_CHAT: 'live-chat',
};

export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};
