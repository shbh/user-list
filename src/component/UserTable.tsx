import React, { useState } from 'react';
import { useUserContext } from './context/UserContext';

const UserTable: React.FC = () => {
    const { userList, darkMode } = useUserContext();
    const [expandedUserId, setExpandedUserId] = useState<number | null>(null);

    return (
        <>
            <div className={`overflow-auto ${darkMode ? 'dark' : ''} rounded-lg shadow-lg`}>
                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg">
                    <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-semibold">
                        <tr>
                            <th className="p-4 text-left">ID</th>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Company</th>
                            <th className="p-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((res) => (
                            <React.Fragment key={res.id}>
                                <tr className="border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="p-4 text-left">{res.id}</td>
                                    <td className="p-4 text-left">{res.name}</td>
                                    <td className="p-4 text-left">{res.email}</td>
                                    <td className="p-4 text-left">{res.company.name}</td>
                                    <td className="p-4 text-left">
                                        <button
                                            className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                            onClick={() => setExpandedUserId(expandedUserId === res.id ? null : res.id)}
                                        >
                                            {expandedUserId === res.id ? 'Hide Details' : 'Show Details'}
                                        </button>
                                    </td>
                                </tr>
                                {expandedUserId === res.id && (
                                    <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                                        <td colSpan={5} className="p-4 text-gray-700 dark:text-gray-300 text-left">
                                            <p>Address: {res.address.street}</p>
                                            <p>Phone: {res.phone}</p>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default UserTable;
