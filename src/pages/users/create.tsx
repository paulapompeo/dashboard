import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
}

const createUserFormData = yup.object().shape({
  name: yup.string().required('name is a required field'),
  email: yup.string().required().email(),
  password: yup.string().required().min(6, 'min 6 digits required'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'passwords does not match')
})

export default function CreateUser() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(createUserFormData)
  });

  // simulates async calls
  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log({ values })
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800" p="8"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="md" fontWeight="normal">Create User</Heading>

          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                name="name"
                label="Name"
                error={errors.name}
                {...(register("name"))}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...(register("email"))}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                name="password"
                type="password"
                label="Password"
                error={errors.password}
                {...(register("password"))}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Password confirmation"
                error={errors.password_confirmation}
                {...(register("password_confirmation"))}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancel</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="orange"
                isLoading={isSubmitting}
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex >
    </Box >
  )
}