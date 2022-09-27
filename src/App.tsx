import { useCallback, useEffect } from "react";
import {
  Center,
  Loader,
  Container,
  Title,
  Stack,
  Button,
  Text,
} from "@mantine/core";
import { IconMoodSad } from "@tabler/icons";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
  selectStatus,
  selectCountries,
  asyncFetchAllCountries,
} from "./app/slice";
import { SearchInput } from "./components/SearchInput";
import { CountryList } from "./components/CountryList";
import { NoResults } from "./components/NoResults";

const App = () => {
  const status = useAppSelector(selectStatus);
  const countries = useAppSelector(selectCountries);
  const dispatch = useAppDispatch();

  const fetchAllCountries = useCallback(() => {
    dispatch(asyncFetchAllCountries());
  }, [dispatch]);

  useEffect(() => {
    fetchAllCountries();
  }, [fetchAllCountries]);

  if (status === "loading") {
    return (
      <Center p="xl">
        <Loader size="xl" />
      </Center>
    );
  }

  if (status === "failed") {
    return (
      <Center p="xl">
        <Stack align="center" justify="center">
          <IconMoodSad size={32} />
          <Text>Sorry, something went wrong.</Text>
          <Button onClick={fetchAllCountries}>Try again</Button>
        </Stack>
      </Center>
    );
  }

  return (
    <Container p="xs">
      <Title mb="sm" align="center">
        Rest Countries
      </Title>
      <SearchInput />
      {countries.length > 0 ? (
        <CountryList countries={countries} />
      ) : (
        <NoResults />
      )}
    </Container>
  );
};

export default App;
