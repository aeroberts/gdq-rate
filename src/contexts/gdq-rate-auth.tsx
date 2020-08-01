import React from "react";
import { UserInfoDocument } from "../generated/graphql";
import { useTypedQuery } from "../hooks/useTypedQuery";

export const AuthContext = React.createContext<{
  userData: any;
  refetch(): void;
}>({ userData: null, refetch: () => {} });

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
  const { loading, error, data: userData, refetch } = useTypedQuery(
    UserInfoDocument
  );
  const val = loading || error ? null : transformUserData(userData);

  const [revalidated, setRevalidated] = React.useState(false);

  React.useEffect(() => {
    if (loading) return;
    (async function () {
      if (!val && localStorage.getItem("jwt_token")) {
        const resp = await window.fetch("/rest/auth/token/refresh");
        try {
          const data = await resp.json();
          if (resp.status >= 200 && resp.status < 300) {
            const { jwt_token } = data;
            localStorage.setItem("jwt_token", jwt_token);
            await refetch();
          } else {
            setRevalidated(true);
          }
        } catch (e) {
          setRevalidated(true);
        }
      }
    })();
  }, [loading, refetch, val]);

  if (loading) return null; // TODO: XXX: this is wack

  if (!revalidated && !val) return null; // also wack but it's ok

  return (
    <AuthContext.Provider value={{ userData: val, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};
