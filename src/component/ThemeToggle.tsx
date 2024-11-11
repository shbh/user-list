import React from 'react';

import { useUserContext } from './context/UserContext';

const ThemeToggleButton: React.FC = () => {
    const { darkMode, toggleTheme } = useUserContext();
    return (<>
        <button onClick={toggleTheme} className='p-2 bg-gray-200 dark:bg-gray-700 rounded-lg'>
            {darkMode ? 'LightMode' : 'DarkMode'}
        </button>
    </>)
}
export default ThemeToggleButton