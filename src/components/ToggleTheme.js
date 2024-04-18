import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
// usar o fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// sun regular
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'


function ToggleTheme() {
    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={isDark
            ? ' absolute bottom-5 left-5 rounded-full bg-white text-yellow-500 p-2 flex justify-center items-center shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            : 'absolute bottom-5 left-5 rounded-full bg-gray-900 text-white p-2 flex justify-center items-center shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
        }>
            <FontAwesomeIcon className='h-4 w-4' icon={isDark ? faSun : faMoon} />
        </button>
    );
}

export default ToggleTheme;