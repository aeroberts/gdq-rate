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

let refreshTimer: number | null = null;
async function refreshToken() {
  clearRefreshTimer();
  try {
    const resp = await window.fetch("/rest/auth/token/refresh");
    if (resp.status < 200 || resp.status >= 300) {
      throw "rejected refresh request";
    }
    const data = await resp.json();
    const { jwt_token, jwt_expires_in } = data;
    localStorage.setItem("jwt_token", jwt_token);
    startRefreshTimer(jwt_expires_in * 0.75);
  } catch (e) {
    // Make sure the timer loop stays alive
    startRefreshTimer(60 * 1000);
    throw e;
  }
}

export function startRefreshTimer(delay: number) {
  clearRefreshTimer();
  refreshTimer = window.setTimeout(refreshToken, delay);
}

export function clearRefreshTimer() {
  if (refreshTimer) {
    window.clearTimeout(refreshTimer);
    refreshTimer = null;
  }
}

export const AuthContextProvider = ({ children }: { children: any }) => {
  const { loading, error, data: userData, refetch } = useTypedQuery(
    UserInfoDocument
  );
  const val = loading || error ? null : transformUserData(userData);

  // On initial page load - have we tried to refresh our dead token?
  const [revalidated, setRevalidated] = React.useState(false);

  React.useEffect(() => {
    if (loading || revalidated) return;

    (async function () {
      if (!val && localStorage.getItem("jwt_token")) {
        try {
          await refreshToken();
          await refetch();
        } catch (e) {
          setRevalidated(true);
        }
      } else {
        if (val) {
          // Initiate the timer cycle if we're logged in
          refreshToken();
        }
        setRevalidated(true);
      }
    })();
  }, [loading, refetch, val, revalidated]);

  if (loading) return null; // TODO: XXX: this is wack

  if (!revalidated && !val) return null; // also wack but it's ok

  return (
    <AuthContext.Provider value={{ userData: val, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};
