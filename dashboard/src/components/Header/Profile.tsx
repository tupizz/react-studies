import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Tadeu Tupinambá</Text>
        <Text color="gray.300" fontSize="small">
          tadeu.tupiz@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Tadeu Tupinambá"
        src="https://github.com/tupizz.png"
      />
    </Flex>
  );
}
