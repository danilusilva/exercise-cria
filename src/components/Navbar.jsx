import { Box, Flex, Button, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4} py={2}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <ChakraLink as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
          Code Challenges
        </ChakraLink>
        
        <Flex gap={4}>
          <Button as={RouterLink} to="/empresa/login" colorScheme="blue" variant="outline">
            Área da Empresa
          </Button>
          <Button as={RouterLink} to="/candidato/login" colorScheme="green" variant="outline">
            Área do Candidato
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 