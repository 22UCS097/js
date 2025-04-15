/*
// contextApi
//client site me banate hay:
//1-------------------------------------------------------------
src/
├── context/
│   └── ThemeContext.jsx
├── App.jsx
└── main.jsx
*/

//2-----------------------------------------------------------------

import { createContext, useState, useContext } from 'react';
 //                      ThemeContext.jsx
// 1. Create the context
const ThemeContext = createContext();

// 2. Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Optional helper hook for easier access
export const useTheme = () => useContext(ThemeContext);

//3--------------------------------------------------------------
//                              main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App /> 
    {/* App will accesss all the things that are provided by ThemeProvider: */}
    </ThemeProvider>
  </React.StrictMode>
);
//4.-----------------------------------------------------------------
  //                              App.jsx
  import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#eee', padding: '2rem' }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;

/*
project-root/
├── client/
│   └── src/
│       ├── components/
│       ├── context/        <-- 🔥 Put your Context API files here
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
├── public/
├── package.json
└── vite.config.js
*/






