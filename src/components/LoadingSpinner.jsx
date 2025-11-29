/**
 * Loading Spinner Component
 * Reusable loading indicator
 */

import React from 'react';

function LoadingSpinner({ size = 'medium', message = 'Loading...' }) {
  const sizeMap = {
    small: { width: '30px', height: '30px', borderWidth: '3px' },
    medium: { width: '50px', height: '50px', borderWidth: '4px' },
    large: { width: '70px', height: '70px', borderWidth: '5px' },
  };

  const style = sizeMap[size] || sizeMap.medium;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
    }}>
      <div
        style={{
          border: `${style.borderWidth} solid #f3f3f3`,
          borderTop: `${style.borderWidth} solid #007bff`,
          borderRadius: '50%',
          width: style.width,
          height: style.height,
          animation: 'spin 1s linear infinite',
        }}
      />
      {message && <p>{message}</p>}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default LoadingSpinner;
