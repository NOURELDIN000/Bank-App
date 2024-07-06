import accountReducer from "./features/account/AccountSlice";
import customerReducer from "./features/customer/CustomerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
