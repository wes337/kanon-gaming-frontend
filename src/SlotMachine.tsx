import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { spinSlotMachine } from "./app/api";
import { FRUIT, Fruit, Spin } from "./app/types";

export const SlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  const [coins, setCoins] = useState(20);
  const [spin, setSpin] = useState<Spin>([
    FRUIT.CHERRY,
    FRUIT.CHERRY,
    FRUIT.CHERRY,
  ]);

  const fruitToEmoji = (fruit: Fruit | null): string => {
    switch (fruit) {
      case FRUIT.CHERRY:
        return "🍒";
      case FRUIT.BANANA:
        return "🍌";
      case FRUIT.LEMON:
        return "🍋";
      case FRUIT.APPLE:
        return "🍎";
      default:
        return "💫";
    }
  };

  const handleSpin = () => {
    if (spinning) {
      return;
    }

    setCoins((coins) => coins - 1);
    setSpin([null, null, null]);
    setSpinning(true);

    spinSlotMachine().then((results) => {
      setCoins((coins) => coins + results.coins);
      setSpin(results.spin);
      setSpinning(false);
    });
  };

  return (
    <Container p="xs">
      <Stack align="center" spacing="xl">
        <Title order={3}>
          Coins:{" "}
          <Text color="yellow" inherit component="span">
            {coins}
          </Text>
        </Title>
        <Group position="center">
          {spin.map((fruit, index) => (
            <Box
              key={index}
              p="xl"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[2],
                textAlign: "center",
                width: "100px",
                fontSize: "2rem",
              })}
            >
              {fruitToEmoji(fruit)}
            </Box>
          ))}
        </Group>
        <Button onClick={handleSpin} disabled={spinning}>
          {spinning ? "Spinning..." : "Spin!"}
        </Button>
      </Stack>
    </Container>
  );
};
