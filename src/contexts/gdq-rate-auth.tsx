import React from "react";
import { useQuery } from "@apollo/client";
import { USER_ID } from "../constants/queries";

export const AuthContext = React.createContext<{
  userData: any;
  refetch(): void;
} | null>(null);

/**
 *
 * @param {{
  "data": {
    "users": [
      {
        "id": "023d7b8a-f01e-4e29-a6ab-45d5e75404ea",
        "display_name": "Shane Schulte",
        "created_at": "2020-07-22T06:23:58.921282+00:00",
        "avatar_url": "https://lh3.googleusercontent.com/a-/AOh14GiRQ8mgFVBU0drzTRYmvAXxyjiROowZqXW27Xni",
        "updated_at": "2020-07-22T06:23:58.921282+00:00"
      }
    ]
  }
}} data
 */

function transformUserData(userData: any) {
  const { users } = userData;

  if (users && Array.isArray(users) && users.length) {
    return users[0];
  }
  return null;
}

export const AuthContextProvider = ({ children }: { children: any }) => {
  const { loading, error, data: userData, refetch } = useQuery<
    typeof USER_ID,
    {}
  >(USER_ID);
  const val = loading || error ? null : transformUserData(userData);

  if (loading) return null; // TODO: XXX: this is wack
  return (
    <AuthContext.Provider value={{ userData: val, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};
