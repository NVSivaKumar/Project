/**
 * Custom Hook: useViewNavigation
 * Simplifies view state management and navigation
 */

import { useState, useCallback } from 'react';
import { VIEW_TYPES } from '@/constants/config';

export function useViewNavigation(initialView = VIEW_TYPES.LOGIN) {
  const [currentView, setCurrentView] = useState(initialView);
  const [viewHistory, setViewHistory] = useState([initialView]);

  const navigate = useCallback((view) => {
    setCurrentView(view);
    setViewHistory((prev) => [...prev, view]);
  }, []);

  const navigateBack = useCallback(() => {
    if (viewHistory.length > 1) {
      const newHistory = viewHistory.slice(0, -1);
      setViewHistory(newHistory);
      setCurrentView(newHistory[newHistory.length - 1]);
    }
  }, [viewHistory]);

  const reset = useCallback(() => {
    setCurrentView(initialView);
    setViewHistory([initialView]);
  }, [initialView]);

  return {
    currentView,
    navigate,
    navigateBack,
    reset,
    canGoBack: viewHistory.length > 1,
  };
}
