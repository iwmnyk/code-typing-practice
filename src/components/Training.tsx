import { Flex } from "@chakra-ui/react"
import { AskQuestion } from "../containers/AskQuestion";


const Training: React.FC = () => {
    
  return (
    <main>
      <Flex direction={"column"} justifyContent={"center"}>

        <AskQuestion />
        
      </Flex>
    </main>
  )
}

export default Training
