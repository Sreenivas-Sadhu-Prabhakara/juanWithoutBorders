'use client';

import { useFontSize } from '@/hooks/useAccessibility';
import { useEffect, useState } from 'react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { fontSize, increase, decrease, reset } = useFontSize();
  const [highContrast, setHighContrast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast, mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Panel */}
      {isOpen && (
        <div
          className="absolute bottom-16 right-0 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-5 mb-2"
          role="dialog"
          aria-label="Accessibility options"
          aria-modal="false"
        >
          <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Accessibility
          </h3>

          {/* Font size controls */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
              Text Size: {fontSize}%
            </label>
            <div className="flex gap-2">
              <button
                onClick={decrease}
                aria-label="Decrease text size"
                className="flex-1 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              >
                A-
              </button>
              <button
                onClick={reset}
                aria-label="Reset text size"
                className="flex-1 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              >
                Reset
              </button>
              <button
                onClick={increase}
                aria-label="Increase text size"
                className="flex-1 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              >
                A+
              </button>
            </div>
          </div>

          {/* High contrast toggle */}
          <div className="flex items-center justify-between py-3 border-t border-slate-200 dark:border-slate-700">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">High Contrast</span>
            <button
              onClick={() => setHighContrast(!highContrast)}
              role="switch"
              aria-checked={highContrast}
              aria-label="Toggle high contrast mode"
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                highContrast ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${highContrast ? 'translate-x-5' : ''}`} />
            </button>
          </div>

          {/* Keyboard shortcuts info */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Tip:</strong> Use Tab to navigate, Enter to activate, and Escape to close menus.
            </p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close accessibility options' : 'Open accessibility options'}
        className="w-14 h-14 rounded-full bg-primary dark:bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary dark:hover:bg-primary transition-all duration-200 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
    </div>
  );
}
