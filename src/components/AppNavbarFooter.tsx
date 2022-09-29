import { IconChevronRight } from "@tabler/icons";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  MediaQuery,
} from "@mantine/core";

export const AppNavbarFooter = () => {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        component="a"
        href="http://wesley.codes"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
      >
        <Group>
          <Avatar src={`${process.env.PUBLIC_URL}/wes.png`} radius="xl" />
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box sx={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                Wesley Moses
              </Text>
              <Text color="dimmed" size="xs">
                wesley.codes
              </Text>
            </Box>
          </MediaQuery>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <IconChevronRight size={18} />
          </MediaQuery>
        </Group>
      </UnstyledButton>
    </Box>
  );
};
