import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashboard
      <Text as="span" ml="1" color="orange.500" fontSize="4xl">.</Text>
    </Text>
  )
}