import { Flex, Heading, Text, Button} from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'


const Result: React.FC = () => {
    
  return (
    <main>
      <Flex direction={"column"} justifyContent={"center"}>
        <Heading as="h1" fontSize={64} pt={40} pb={10} fontWeight={"normal"}>Finished!</Heading>
        
        <Heading as="h2" fontSize={36} pb={10} fontWeight={"normal"} color={"#9e9e9e"}>Score for your Challenge|</Heading>
        <Text fontSize={30} fontWeight={700}>00:01</Text>

        <Button as={ReactRouterLink} to="/" mt={16} minW={300} mx={"auto"} letterSpacing={3} colorScheme="green" mb={10}>Back to Home</Button>
      </Flex>
    </main>
  )
}

export default Result;
