import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email(),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(signInFormSchema) });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxW={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing={4}>
            <Input
              name="email"
              label="E-mail:"
              type="email"
              error={errors["email"]}
              {...register("email")}
            />
            <Input
              name="password"
              label="Senha:"
              type="password"
              error={errors["password"]}
              {...register("password")}
            />
          </Stack>

          <Button
            size={"lg"}
            type="submit"
            mt={6}
            colorScheme="pink"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
