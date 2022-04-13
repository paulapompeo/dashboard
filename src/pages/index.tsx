import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string,
  password: string,
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required()
})

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  // const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
  //   console.log({ values })
  // }

  // simulates async calls
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log({ values })
  }

  console.log('errors', errors)

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360} bg="gray.800"
        p="8" // medida do proprio chackra => 32px (2rem)
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="3">
          <Input
            name="email"
            type="email"
            label="Email"
            error={errors.email}
            // {...(register("email", { required: "E-mail is required" }))}
            {...(register("email"))}
          />

          <Input
            name="password"
            type="password"
            label="Password"
            error={errors.password}
            // {...(register("password", { required: "Password is required" }))}
            {...(register("password"))}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="orange"
          size="lg"
          isLoading={isSubmitting}
        >
          Sign In
        </Button>
      </Flex>
    </Flex>
  )
}
