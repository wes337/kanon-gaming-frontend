import { Container, Divider, Stack, Text, Title } from "@mantine/core";
import { Prism } from "@mantine/prism";

const questionOne = `CREATE TABLE games (
	game_id INT PRIMARY KEY,
	title VARCHAR(50)
);

CREATE TABLE type (
	type_id INT PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE game_type (
	game_id INT,
	type_id INT,
	CONSTRAINT game_type_pk PRIMARY KEY (game_id, type_id),
	CONSTRAINT FK_game FOREIGN KEY (game_id) REFERENCES games (game_id),
	CONSTRAINT FK_type FOREIGN KEY (type_id) REFERENCES type (type_id)
);

CREATE TABLE country (
	country_id int IDENTITY,
	country varchar(50) NOT NULL,
	CONSTRAINT PK_country PRIMARY KEY CLUSTERED (country_id)
)

ALTER TABLE games WITH NOCHECK
	ADD FOREIGN KEY (country_id) REFERENCES country (country_id)
GO

CREATE TABLE players (
	player_id INT PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE player_favourite (
	player_id INT,
	game_id INT,
	CONSTRAINT player_favourite_pk PRIMARY KEY (player_id, game_id),
	CONSTRAINT FK_player FOREIGN KEY (player_id) REFERENCES players (player_id),
	CONSTRAINT FK_game FOREIGN KEY (game_id) REFERENCES games (game_id)
);`;

const questionTwo = `SELECT p.*
FROM players p
JOIN player_favourite pf ON p.player_id = pf.player_id
JOIN game_type gt ON pf.game_id = gt.game_id
JOIN type t ON gt.type_id = t.type_id
WHERE t.name = 'SLOTS'`;

export const SqlQuestions = () => {
  return (
    <Container
      p="xs"
      sx={(theme) => ({
        borderRadius: theme.radius.sm,
        border: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[2]
        }`,
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : "white",
      })}
    >
      <Stack align="center" spacing="xl">
        <Title order={5}>Question 1</Title>
        <Text px="xl">
          Create tables for games, game types, countries, and players. Create a
          many-to-many relationship for games and game types, and players and
          games. Create a one-to-many relationship for games and countries.
        </Text>
        <Prism language="sql">{questionOne}</Prism>
      </Stack>
      <Divider my="sm" />
      <Stack align="center" spacing="xl">
        <Title order={5}>Question 2</Title>
        <Text px="xl">
          SQL query to get all players that have games of type "SLOT" as their
          favorite games.
        </Text>
        <Prism language="sql">{questionTwo}</Prism>
      </Stack>
    </Container>
  );
};
