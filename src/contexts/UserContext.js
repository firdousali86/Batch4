import React, {createContext, useContext} from 'react';

const UserContext = createContext();

export function UserContextProvider({children}) {
  return <UserContext.Provider>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
