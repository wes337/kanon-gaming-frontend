import { AppShell, MantineTheme } from "@mantine/core";
import { APP } from "./app/types";
import { useAppSelector } from "./app/hooks";
import { selectSelectedApp } from "./app/appSlice";
import { AppHeader } from "./components/AppHeader";
import { RestCountries } from "./RestCountries";
import { SlotMachine } from "./SlotMachine";
import { SqlQuestions } from "./SqlQuestions";
import { AppNavbar } from "./components/AppNavbar";
import { Home } from "./Home";

const App = () => {
  const selectedApp = useAppSelector(selectSelectedApp);

  const setAppStylesFromTheme = (theme: MantineTheme) => {
    return {
      main: {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
      },
    };
  };

  const renderSelectedApp = () => {
    if (selectedApp === APP.HOME) {
      return <Home />;
    }

    if (selectedApp === APP.REST_COUNTRIES) {
      return <RestCountries />;
    }

    if (selectedApp === APP.SLOT_MACHINE) {
      return <SlotMachine />;
    }

    if (selectedApp === APP.SQL) {
      return <SqlQuestions />;
    }
  };

  return (
    <AppShell
      padding="md"
      navbar={<AppNavbar />}
      header={<AppHeader />}
      styles={setAppStylesFromTheme}
    >
      {renderSelectedApp()}
    </AppShell>
  );
};

export default App;
