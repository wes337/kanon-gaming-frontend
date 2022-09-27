import countriesReducer, { CountriesState, setSearchQuery } from "./slice";

describe("countries slice", () => {
  const initialState: CountriesState = {
    countries: [
      {
        name: {
          common: "Switzerland",
          official: "Swiss Confederation",
        },
      },
      {
        name: {
          common: "Canada",
          official: "Canada",
        },
      },
    ],
    status: "idle",
    searchQuery: "",
  };
  it("should handle initial state", () => {
    expect(countriesReducer(undefined, { type: "unknown" })).toEqual({
      countries: [],
      status: "idle",
      searchQuery: "",
    });
  });

  it("should update the search query", () => {
    const actual = countriesReducer(initialState, setSearchQuery("canada"));
    expect(actual.searchQuery).toEqual("canada");
  });
});
