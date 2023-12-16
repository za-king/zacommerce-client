import { createContext, useContext, useState } from "react";

const isLoginContext = createContext([]);

export const UserContext = ({ children }: any) => {
  const [user, setUser] = useState<any>({});
  //   return (
  //     // <isLoginContext.Provider >
  //     //   {children}
  //     // </isLoginContext.Provider>
  //   );
};
