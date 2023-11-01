import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext({state: {}, actions: {}});

export function UserContextProvider({children, username, setUsername}) {
  //   const [data, setData] = useState(username);

  //   useEffect(() => {
  //     setData(username);
  //   }, [username]);

  const value = {
    state: {username},
    actions: {setUsername},
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
