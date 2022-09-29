import { useEffect, useRef } from "react";
import { useDebouncedState } from "@mantine/hooks";
import { TextInput, ActionIcon } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons";
import { useAppDispatch } from "../app/hooks";
import { setSearchQuery } from "../app/countriesSlice";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useDebouncedState(
    "",
    200
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearchQuery));
  }, [debouncedSearchQuery, dispatch]);

  const clearSearchQuery = () => {
    setDebouncedSearchQuery("");
    if (ref.current) {
      ref.current.value = "";
    }
  };

  return (
    <TextInput
      ref={ref}
      icon={<IconSearch />}
      defaultValue={debouncedSearchQuery}
      placeholder="Country name"
      onChange={(event) => setDebouncedSearchQuery(event.currentTarget.value)}
      rightSection={
        debouncedSearchQuery && (
          <ActionIcon onClick={clearSearchQuery}>
            <IconX size={18} />
          </ActionIcon>
        )
      }
    />
  );
};
