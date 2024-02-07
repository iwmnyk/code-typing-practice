import { Flex, Heading } from "@chakra-ui/react"

const Error: React.FC = () => {

  return (
    <main>
      <Flex direction={"column"} justifyContent={"center"}>

        <Heading as="h1" fontSize={64} pt={40} pb={10} fontWeight={"normal"}>404...</Heading>

      </Flex>

    </main>
  )
}

export default Error
