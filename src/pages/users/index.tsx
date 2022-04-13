import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="md" fontWeight="normal">Users</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="orange"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Create new user
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="orange" />
                </Th>
                <Th>User</Th>
                {isWideVersion && <Th>Registered at</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Paula Pompeo</Text>
                    <Text fontSize="sm" color="gray.300">paulapompeoc@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion ?? <Td>04 de Abril, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="orange"
                    iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    {isWideVersion && 'Edit'}
                  </Button>

                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Paula Pompeo</Text>
                    <Text fontSize="sm" color="gray.300">paulapompeoc@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion ?? <Td>04 de Abril, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="orange"
                    iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    {isWideVersion && 'Edit'}
                  </Button>

                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]} >
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Paula Pompeo</Text>
                    <Text fontSize="sm" color="gray.300">paulapompeoc@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion ?? <Td>04 de Abril, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="orange"
                    iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    {isWideVersion && 'Edit'}
                  </Button>

                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex >
    </Box >
  )
}