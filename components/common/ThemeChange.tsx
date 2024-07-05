"use client";

import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

export default function ThemeChange() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        themeChange(false);
        setTheme(document.documentElement.getAttribute('data-theme') || 'light');
    }, []);

    const handleThemeChange = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <button
            onClick={handleThemeChange}
            className="btn btn-ghost btn-circle transition duration-500 ease-in-out transform hover:scale-110 focus:outline-none"
        >
            {theme === 'dark' ? (
                <Sun className="transition-opacity duration-500" />
            ) : (
                <Moon className="transition-opacity duration-500" />
            )}
        </button>
    );
};