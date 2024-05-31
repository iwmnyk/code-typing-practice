import { Flex } from "@chakra-ui/react"
import { AskQuestion } from "../containers/AskQuestion";
import { Timer } from "../containers/Timer";


const Training: React.FC = () => {
    
  return (
    <main>
      <Flex direction={"column"} justifyContent={"center"}>

        <AskQuestion />
        <Timer />
        
      </Flex>
    </main>
  )
}

export default Training
