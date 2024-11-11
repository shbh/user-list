import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    company: { name: string };
    phone: string;
    address: { street: string };
}

interface UserContextType {
    userList: User[];
    darkMode: boolean;
    toggleTheme: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userList, setUsers] = useState<User[]>([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };
        fetchUsers();
    }, []);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <UserContext.Provider value={{ userList, darkMode, toggleTheme }}>
            <div className={darkMode ? 'dark' : ''}>{children}</div>
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
