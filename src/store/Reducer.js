import { createSlice } from "@reduxjs/toolkit";

const packagePlanSlice = createSlice({
    
  name: "packagePlan",
  initialState: {
    PremiumPlanLIst : [ "Unlimited Bandwitch",
    "Encrypted Connection",
    "Yes Traffic Logs",
    "Works on All Devices",
    "Connect Anyware",
    "Get New Features",],

     StandardPlanList : [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      freePlanLIst : [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ]   
  },

 
});

export const selectfreePlan= (state) => state.packagePlan.freePlanLIst;
export const selectStandardPlanList=(state) => state.packagePlan.StandardPlanList;
export const selectPremiumPlanLIst=(state) => state.packagePlan.PremiumPlanLIst;

export default packagePlanSlice .reducer;
