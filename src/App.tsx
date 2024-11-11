import React from 'react';
import './App.css';
import { UserProvider } from './component/context/UserContext';
import ThemeToggleButton from './component/ThemeToggle';
import UserTable from './component/UserTable';
const App: React.FC = () => {
  return (
    <>
      <UserProvider>
        <div className='min-h-screen p-5 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
          <header className='mb-4 flex justify-between item-center0'>
            <h1> User List</h1>
            <ThemeToggleButton />

          </header>
          <UserTable />
        </div>
      </UserProvider>
    </>
  )
} 
export default App