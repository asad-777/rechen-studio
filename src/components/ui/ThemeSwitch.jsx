'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <button 
        aria-label="Toggle Theme" 
        className="p-2 rounded-full bg-base-2a border border-base-3a text-text-black w-9 h-9 flex items-center justify-center transition-all duration-200"
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-full bg-base-2a hover:bg-base-3a/40 border border-base-3a text-text-black hover:scale-105 active:scale-95 w-9 h-9 flex items-center justify-center shadow-sm transition-all duration-200 group relative"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon weight="bold" className="w-4 h-4 text-primary-a group-hover:rotate-12 transition-transform duration-200" />
      ) : (
        <Sun weight="fill" className="w-4 h-4 text-primary-a group-hover:rotate-90 transition-transform duration-300" />
      )}
    </button>
  );
}
