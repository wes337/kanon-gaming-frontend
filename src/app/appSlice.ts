import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { APP, AppName } from "./types";

export interface AppState {
  selectedApp: AppName;
}

const initialState: AppState = {
  selectedApp: APP.HOME,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedApp: (state, action: PayloadAction<AppName>) => {
      state.selectedApp = action.payload;
    },
  },
});

export const { setSelectedApp } = appSlice.actions;

export const selectSelectedApp = (state: RootState) => state.app.selectedApp;

export const { reducer: appReducer } = appSlice;
