import { configureStore } from "@reduxjs/toolkit";
import packagePlanReducer from "./Reducer";

export default configureStore({
  reducer: {
    packagePlan: packagePlanReducer
  }
});