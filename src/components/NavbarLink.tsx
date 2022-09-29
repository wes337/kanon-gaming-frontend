import {
  Group,
  ThemeIcon,
  UnstyledButton,
  Text,
  MediaQuery,
} from "@mantine/core";
import { selectSelectedApp, setSelectedApp } from "../app/appSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { AppName } from "../app/types";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: AppName;
}

export const NavbarLink = ({ icon, color, label }: MainLinkProps) => {
  const selectedApp = useAppSelector(selectSelectedApp);
  const dispatch = useAppDispatch();

  const isSelected = selectedApp === label;

  const onClick = () => {
    dispatch(setSelectedApp(label));
  };

  return (
    <UnstyledButton
      onClick={onClick}
      sx={(theme) => ({
        display: "block",
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

        ...(isSelected && {
          fontWeight: 600,
          color:
            theme.colorScheme === "dark"
              ? theme.colors[color][3]
              : theme.colors[color][6],

          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors[color][0],

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors[color][1],
          },
        }),

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
          width: "100%",
          padding: theme.spacing.xs,
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Text size="sm">{label}</Text>
        </MediaQuery>
      </Group>
    </UnstyledButton>
  );
};
