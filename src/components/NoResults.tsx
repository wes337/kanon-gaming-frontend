import { Center, Box, Text, Stack } from "@mantine/core";
import { IconMoodConfuzed } from "@tabler/icons";
import { useAppSelector } from "../app/hooks";
import { selectSearchQuery } from "../app/countriesSlice";

export const NoResults = () => {
  const searchQuery = useAppSelector(selectSearchQuery);

  return (
    <Center p="xl">
      <Stack align="center" justify="center">
        <IconMoodConfuzed size={32} />
        <Box sx={{ display: "flex", gap: "0.5em" }}>
          <Text>No countries found matching</Text>
          <Text color="blue" weight={600}>
            {searchQuery}
          </Text>
        </Box>
      </Stack>
    </Center>
  );
};
