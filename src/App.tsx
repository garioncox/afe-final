import { Route, Routes } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { TransactionInput } from "./Pages/TransactionInput";
import { TransactionHistory } from "./Pages/TransactionHistory";
import { Test } from "./Pages/Test";
import { RequireAuth } from "./Components/Auth/RequireAuth";
import BudgetInput from "./Pages/BudgetInput";
import { BudgetStats } from "./Pages/BudgetStats";
import { TransactionEdit } from "./Pages/TransactionEdit";

function App() {
  // const { user, isAuthenticated } = useAuth();

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
            <TransactionHistory />
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
      <Route
        path="/budget/input"
        element={
          <RequireAuth>
            <BudgetInput />
          </RequireAuth>
        }
      />
      <Route
        path="/budget/stats/:budgetId"
        element={
          <RequireAuth>
            <BudgetStats />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/transaction/edit/:transactionId"
        element={
          <RequireAuth>
            <TransactionEdit />
          </RequireAuth>
        }
      ></Route>
    </Routes>
  );
}

export default App;
