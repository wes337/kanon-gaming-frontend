import { useEffect } from "react";
import { useDebouncedState } from "@mantine/hooks";
import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useAppDispatch } from "../app/hooks";
import { setSearchQuery } from "../app/slice";

export const SearchInput = () => {
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useDebouncedState(
    "",
    200
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearchQuery));
  }, [debouncedSearchQuery, dispatch]);

  return (
    <TextInput
      icon={<IconSearch />}
      defaultValue={debouncedSearchQuery}
      placeholder="Country name"
      onChange={(event) => setDebouncedSearchQuery(event.currentTarget.value)}
    />
  );
};
