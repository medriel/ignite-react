import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Adriel Medeiros</Text>
        <Text color="gray.300" fontSize="small">
          adriel@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Adriel Medeiros" src="" />
    </Flex>
  )
}