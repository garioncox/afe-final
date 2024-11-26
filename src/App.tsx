import { Route, Routes } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { TransactionInput } from "./Pages/TransactionInput";
import { TransactionView } from "./Pages/TransactionView";
import { Test } from "./Pages/Test";
import { useEffect } from "react";
import { callAuthApiEndpoint } from "./Functions/apiService";
import { RequireAuth } from "./Components/Auth/RequireAuth";
import BudgetInput from "./Pages/BudgetInput";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated } = useAuth0();

  // useEffect(() => {
  //   const call = async () => {
  //     // console.log(`calling with... ${user?.id_token ?? ""}`);
  //     await callAuthApiEndpoint(user?.id_token ?? "");
  //   };
  //   if (isAuthenticated) {
  //     call();
  //   }
  // }, [user, isAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/transaction/input"
        element={
          <RequireAuth>
            <TransactionInput />
          </RequireAuth>
        }
      />
      <Route
        path="/transaction/view"
        element={
          <RequireAuth>
            <TransactionView />
          </RequireAuth>
        }
      />
      <Route
        path="/test"
        element={
          <RequireAuth>
            <Test />
          </RequireAuth>
        }
      />
      <Route path="/budget/input" element={<BudgetInput />} />
    </Routes>
  );
}

export default App;
