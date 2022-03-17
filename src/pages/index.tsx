import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

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
          <Input
            name="email"
            type="email"
            label="Email"
          />

          <Input
            name="password"
            type="password"
            label="Password"
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="orange" size="lg">Sign In</Button>
      </Flex>
    </Flex>
  )
}
