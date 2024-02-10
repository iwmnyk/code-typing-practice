import { Flex, Text } from "@chakra-ui/react"
import { AskQuestion } from "../containers/AskQuestion";


const Training: React.FC = () => {
    
  return (
    <main>
      <Flex direction={"column"} justifyContent={"center"}>

        <AskQuestion />
       
        <Text>00:01</Text>
      </Flex>
    </main>
  )
}

export default Training
