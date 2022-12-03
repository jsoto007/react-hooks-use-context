import React, { useState } from 'react';
import ThemedButton from '../components/ThemedButton';
import { UserContext, UserProvider } from './user';

const UserTheme = React.createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    return (
        <UserTheme.provider value={{ theme, setTheme }} >{children}</UserTheme.provider>
    )

}

export { UserTheme, ThemeProvider };