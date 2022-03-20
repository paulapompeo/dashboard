import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>
          Paula Pompeo
        </Text>
        <Text color="gray.300" fontSize="small">
          paulapompeoc@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Paula Pompeo"
        src="https://avatars.githubusercontent.com/u/47497767?v=4"
      />
    </Flex>
  )
}