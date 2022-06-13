import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Siderbar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex={1} borderRadius="8" bgColor="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar novo usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <Stack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing={["4", "8"]} w="100%">
              <Input name="name" label="Nome completo"></Input>
              <Input name="email" label="E-mail"></Input>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["4", "8"]} w="100%">
              <Input name="password" type="password" label="Senha"></Input>
              <Input
                name="passwordConfirmation"
                type="password"
                label="Confirme sua senha"
              ></Input>
            </SimpleGrid>
          </Stack>

          <Flex mt={8} justify="flex-end">
            <Stack direction="row" spacing={4}>
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
