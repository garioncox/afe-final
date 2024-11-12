import { useAuth } from "react-oidc-context";

function LoginButton() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <button onClick={() => void auth.removeUser()}>Log out</button>
      </div>
    );
  }

  return (
    <button
      className="flex grow ms-auto"
      onClick={() => void auth.signinRedirect()}
    >
      Log in
    </button>
  );
}

export default LoginButton;
