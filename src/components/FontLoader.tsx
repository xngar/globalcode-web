'use client';

import { useEffect } from 'react';

/**
 * Loads Material Symbols asynchronously after the initial render
 * so it doesn't block the First Contentful Paint (FCP).
 */
export default function FontLoader() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block';
    document.head.appendChild(link);
  }, []);

  return null;
}
