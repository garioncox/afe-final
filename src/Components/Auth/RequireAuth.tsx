import { ReactNode } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const Protected = withAuthenticationRequired(() => <>{children}</>, {
    onRedirecting: () => <div>Redirecting to the login page...</div>,
  });

  return <Protected />;
};
