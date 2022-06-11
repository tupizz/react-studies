import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w={64} mr={8}>
      {/* general part */}
      <Stack spacing={12} align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>

          <Stack spacing={4} mt={8} align="stretch">
            <Flex as={Link} align="center">
              <Icon as={RiDashboardLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Flex>

            <Flex as={Link} align="center">
              <Icon as={RiContactsLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Flex>
          </Stack>
        </Box>

        {/* automation part */}
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>

          <Stack spacing={4} mt={8} align="stretch">
            <Flex as={Link} align="center">
              <Icon as={RiInputMethodLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Flex>

            <Flex as={Link} align="center">
              <Icon as={RiGitMergeLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
