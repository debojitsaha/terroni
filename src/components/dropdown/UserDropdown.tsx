// UserDropdown.tsx
import React from 'react';
import { useUser } from '../../utils/userContext';

const UserDropdown: React.FC = () => {
  const { userId, setUsername, setUserId, username } = useUser();

  const handleUserChange = (newUserId: string, newUsername: string) => {
    setUserId(newUserId);
    setUsername(newUsername);
  };

  return (
    <div className="w-72 flex items-center justify-between absolute mt-28 h-14 bg-zinc-50">
      <div 
        className="w-full flex items-center justify-between px-4 h-full"
        style={{ zIndex: 1000 }}
      >
        <div className="flex items-center justify-between" onClick={() => handleUserChange(userId, username)}>
          <div className="w-8 h-8 rounded-full user-avatar"></div>
          <div className="mx-4 text-black text-md cursor-pointer">
            {username}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
