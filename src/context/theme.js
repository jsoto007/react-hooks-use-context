import React, { useState } from 'react';

const ThemeContext = React.createContext(); 

function ThemeProvider ({ children }) {

function ThemeContext({ children }) {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeContext.provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.provider>
    )
}
}

export { ThemeContext, ThemeProvider };