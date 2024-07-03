"use client"

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

export default function ThemeChange() {
    const [theme, setTheme] = useState('light'); // Default theme is 'light'

    useEffect(() => {
        themeChange(false); // Initialize themeChange without auto-detection
        document.documentElement.setAttribute('data-set-theme', theme); // Apply initial theme
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-set-theme', theme); // Apply theme on change
        localStorage.setItem('theme', theme); // Optional: Save theme preference
    }, [theme]);

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="flex items-center justify-center theme-change btn btn-ghost btn-circle">
            <button onClick={toggleTheme} className={`transition-transform duration-500 ease-in-out transform ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`}>
                {theme === 'light' ? <Moon /> : <Sun />}
            </button>
        </div>
    );
}