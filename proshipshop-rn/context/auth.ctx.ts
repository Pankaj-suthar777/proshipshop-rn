import { User } from "@/@types/user";
import { getFromAsyncStorage, Keys } from "@/utils/asyncStorage";
import {
  useContext,
  createContext,
  type PropsWithChildren,
  useState,
  useEffect,
  ReactNode,
} from "react";

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
  userInfo: User | null;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
  userInfo: null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    async function getToken() {
      const token = await getFromAsyncStorage(Keys.AUTH_TOKEN);
      setToken(token || undefined);
    }
    getToken();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession("xxx");
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
