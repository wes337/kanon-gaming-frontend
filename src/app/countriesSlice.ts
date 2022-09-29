import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchAllCountries } from "./api";
import { Country } from "./types";

export interface CountriesState {
  countries: Country[];
  status: "idle" | "loading" | "failed";
  searchQuery: string;
}

const initialState: CountriesState = {
  countries: [],
  status: "loading",
  searchQuery: "",
};

export const asyncFetchAllCountries = createAsyncThunk(
  "countries/fetchAllCountries",
  async () => {
    const response = await fetchAllCountries();
    return response;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchAllCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncFetchAllCountries.fulfilled, (state, action) => {
        state.status = "idle";
        state.countries = action.payload;
      })
      .addCase(asyncFetchAllCountries.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSearchQuery } = countriesSlice.actions;

export const selectStatus = (state: RootState) => state.countries.status;
export const selectAllCountries = (state: RootState) =>
  state.countries.countries;
export const selectSearchQuery = (state: RootState) =>
  state.countries.searchQuery;

export const selectCountries = createSelector(
  [selectAllCountries, selectSearchQuery],
  (allCountries, searchQuery) => {
    if (!searchQuery) {
      return allCountries;
    }

    return allCountries.filter(({ name }) =>
      `${name.common} ${name.official}`
        .toLowerCase()
        .match(searchQuery.toLowerCase())
    );
  }
);

export const { reducer: countriesReducer } = countriesSlice;
