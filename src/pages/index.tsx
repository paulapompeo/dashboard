import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360} bg="gray.800"
        p="8" // medida do proprio chackra => 32px (2rem)
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="3">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="orange.500"
              bg="gray.900"
              variant="filled"
              _hover={{
                bg: 'gray.900'
              }}
              size="lg"

            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="orange.500"
              bg="gray.900"
              variant="filled"
              _hover={{
                bg: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="orange" size="lg">Sign In</Button>
      </Flex>
    </Flex>
  )
}
