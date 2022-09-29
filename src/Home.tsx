import { Center, Text, Anchor, Stack } from "@mantine/core";

export const Home = () => {
  return (
    <Center>
      <Stack align="center">
        <Text>Click a link in the navbar on the left to get started!</Text>
        <Text color="dimmed">
          You can see the source code for the front end{" "}
          <Anchor
            href="https://github.com/wes337/kanon-gaming-frontend"
            target="_blank"
          >
            here
          </Anchor>
          , and the source code for the back end{" "}
          <Anchor
            href="https://github.com/wes337/kanon-gaming-backend"
            target="_blank"
          >
            here
          </Anchor>
          .
        </Text>
      </Stack>
    </Center>
  );
};
