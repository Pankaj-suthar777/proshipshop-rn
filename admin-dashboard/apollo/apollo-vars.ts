import { User } from "@/@types/user";
import { makeVar } from "@apollo/client";

export const isAuthenticatedVar = makeVar<boolean>(false);
export const userVar = makeVar<User | null>(null);
export const isLoadingVar = makeVar<boolean>(true);
