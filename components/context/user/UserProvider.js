import React, { useState,useEffect } from 'react';
import UserContext from './UserContext';
import { useAuth,useCurrentUser } from '@/hooks/user';

const UserProvider = ({ children }) => {



  return (
    <UserContext.Provider value={userState}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;