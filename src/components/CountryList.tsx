import { useState, useEffect, useCallback } from "react";
import { SimpleGrid, Pagination, Group, Divider } from "@mantine/core";
import { Country } from "./Country";
import { Countries } from "../app/types";

const PAGE_SIZE = 10;

interface CountryListProps {
  countries: Countries;
}

export const CountryList = ({ countries }: CountryListProps) => {
  const [paginatedCountries, setPaginatedCountries] = useState(countries);
  const [paginationLabel, setPaginationLabel] = useState("");

  const handlePageChange = useCallback(
    (page: number) => {
      const start = (page - 1) * PAGE_SIZE + 1;
      const end = Math.min(start + PAGE_SIZE, countries.length);
      setPaginationLabel(
        `Showing ${start} - ${end} of ${countries.length} countries`
      );
      setPaginatedCountries(countries.slice(start - 1, end));
    },
    [countries]
  );

  useEffect(() => {
    handlePageChange(1);
  }, [handlePageChange]);

  return (
    <>
      <Group align="center" position="center" mt="md">
        <Pagination
          onChange={handlePageChange}
          total={Math.max(countries.length / PAGE_SIZE, 1)}
          sx={{ justifyContent: "center" }}
        />
      </Group>
      <Divider my="xs" label={paginationLabel} labelPosition="center" />
      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {paginatedCountries.map((country) => (
          <Country
            key={country.name.official}
            name={country.name}
            flags={country.flags}
            population={country.population}
            capital={country.capital}
            region={country.region}
            subregion={country.subregion}
            languages={country.languages}
          />
        ))}
      </SimpleGrid>
    </>
  );
};
