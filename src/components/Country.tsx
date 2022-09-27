import { Card, Image, Box, Text, Badge } from "@mantine/core";
import { Country as CountryProps } from "../app/types";

export const Country: React.FC<CountryProps> = ({
  name,
  flags,
  population,
  capital,
  region,
  subregion,
  languages,
}) => {
  const getLanguageText = (): string => {
    if (languages) {
      return `The official languages are ${Object.values(languages).join(
        ", "
      )}`;
    }

    return "";
  };

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={flags.png} height={160} alt={`Flag of ${name.common}`} />
      </Card.Section>
      <Box mt="md">
        <Text weight={500}>{name.common}</Text>
      </Box>
      <Box mb="sm">
        <Badge color="pink" variant="light">
          {region}
        </Badge>
        <Badge color="green" variant="light">
          Population: {population}
        </Badge>
      </Box>
      <Text size="sm" color="dimmed">
        {name.common}, officially known as {name.official}, is a country in{" "}
        {subregion}. The capital city of {name.common} is {capital}.{" "}
        {getLanguageText()}.
      </Text>
    </Card>
  );
};
