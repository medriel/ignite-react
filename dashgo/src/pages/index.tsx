import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000)) //utilizado para definir o tempo que o botao de `entrar` fica carregando

    console.log(values)

    //formState. // -> da para saber algumas informações interessantes do formulario
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8" //32 px / 2rem
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="Email" {...register('email')} />
          <Input name="password" type="password" label="Senha" {...register('password')} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting} // possibilita colocar o sinal de carregamento no botao
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
