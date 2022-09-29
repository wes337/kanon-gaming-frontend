import {
  Group,
  Header,
  ActionIcon,
  useMantineColorScheme,
  Title,
  Image,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import { useAppSelector } from "../app/hooks";
import { selectSelectedApp } from "../app/appSlice";

export const AppHeader = () => {
  const selectedApp = useAppSelector(selectSelectedApp);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header height={80} p="xs">
      <Group>
        <Image
          width={100}
          height={60}
          fit="contain"
          src={`${process.env.PUBLIC_URL}/logo.png`}
        />
        <Title mr="auto" order={4}>
          {selectedApp}
        </Title>
        <ActionIcon
          mr="xl"
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
      </Group>
    </Header>
  );
};
