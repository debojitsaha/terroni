// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export type UserContextType = {
  userId: string;
  username: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
  setUsername: Dispatch<SetStateAction<string>>;
  setUserId: Dispatch<SetStateAction<string>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [userId, setUserId] = useState('IGH024724845797');
  const [username, setUsername] = useState('Krishnan Anirudh');

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <UserContext.Provider value={{ userId, username, darkMode, toggleDarkMode, setUsername, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
