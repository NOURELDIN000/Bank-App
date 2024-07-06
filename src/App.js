import CreateCustomer from "./features/customer/CreateCustomer";
import Customer from "./features/customer/Customer";
import AccountOperations from "./features/account/AccountOperations";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((state) => state.customer.fullName);

  return (
    <div>
      {!customer ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />

          <AccountOperations />
        </>
      )}
    </div>
  );
}

export default App;
