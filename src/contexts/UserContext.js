import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext({state: {}, actions: {}});

export function UserContextProvider({
  children,
  username,
  setUsername,
  isNotificationEnabled,
  setIsNotifEnabled,
}) {
  //   const [data, setData] = useState(username);

  //   useEffect(() => {
  //     setData(username);
  //   }, [username]);

  const value = {
    state: {username, isNotificationEnabled},
    actions: {setUsername, setIsNotifEnabled},
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
