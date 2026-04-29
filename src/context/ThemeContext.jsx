import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-bs-theme", theme);
        if (theme === "dark") {
            root.style.setProperty("--primary-color", "#ffffff");
            root.style.setProperty("--secondary-color", "#bbbbbb");
            root.style.setProperty("--background-color", "#08090a");
            root.style.setProperty("--background-color-pattern", "#222222");
            root.style.setProperty("--editor-action-list", "#1a1a1a");
            root.style.setProperty("--editor-action-menu-buttons", "#060606");
            root.style.setProperty("--editor-action-buttons", "#242424");

            root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.05)");
            root.style.setProperty("--card-border", "rgba(255, 255, 255, 0.1)");
            root.style.setProperty("--card-border-hover", "rgba(255, 255, 255, 0.25)");
            root.style.setProperty("--card-shadow", "rgba(0, 0, 0, 0.7)");

            root.style.setProperty("--text-primary", "#ffffff");
            root.style.setProperty("--text-secondary", "#bbbbbb");
        } else {
            root.style.setProperty("--primary-color", "#08090a");
            root.style.setProperty("--secondary-color", "#737373");
            root.style.setProperty("--background-color", "#ffffff");
            root.style.setProperty("--background-color-pattern", "#f9f6f6");
            root.style.setProperty("--editor-action-list", "#ffffff");
            root.style.setProperty("--editor-action-menu-buttons", "#ffffff");
            root.style.setProperty("--editor-action-buttons", "#ededed");

            // root.style.setProperty("--card-bg", "rgba(20, 20, 20, 0.85)");
            root.style.setProperty("--card-border", "rgba(0, 0, 0, 0.3)");
            root.style.setProperty("--card-border-hover", "rgba(0, 0, 0, 0.15)");
            root.style.setProperty("--card-shadow", "rgba(0, 0, 0, 0.4)");

            root.style.setProperty("--text-primary", "#08090a");
            root.style.setProperty("--text-secondary", "#737373");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
