import { Navbar } from "@mantine/core";
import { IconHome, IconWorld, IconSpade, IconDatabase } from "@tabler/icons";
import { APP } from "../app/types";
import { NavbarLink } from "./NavbarLink";
import { AppNavbarFooter } from "./AppNavbarFooter";

const navbarLinks = [
  { icon: <IconHome size={16} />, color: "blue", label: APP.HOME },
  { icon: <IconWorld size={16} />, color: "teal", label: APP.REST_COUNTRIES },
  { icon: <IconSpade size={16} />, color: "violet", label: APP.SLOT_MACHINE },
  { icon: <IconDatabase size={16} />, color: "grape", label: APP.SQL },
];

export const AppNavbar = () => {
  return (
    <Navbar width={{ sm: 300, lg: 400, base: 70 }} p="xs">
      <Navbar.Section grow mt="md">
        {navbarLinks.map(({ icon, color, label }) => (
          <NavbarLink key={label} icon={icon} color={color} label={label} />
        ))}
      </Navbar.Section>
      <Navbar.Section>
        <AppNavbarFooter />
      </Navbar.Section>
    </Navbar>
  );
};
