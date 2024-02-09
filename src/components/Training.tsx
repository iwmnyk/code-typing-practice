import { Flex, Text, Input } from "@chakra-ui/react"

import { useEffect, useRef } from "react"
import { AskQuestion } from "../containers/AskQuestion";


const Training: React.FC = () => {
    
    const inputRef = useRef<HTMLInputElement | null>(null);
  
    useEffect(() => {
      // ページロード時に Input にフォーカスを当てる
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

  return (
    <main>
      <Flex direction={"column"} justifyContent={"center"}>

        <AskQuestion />

        <Input 
            maxW={600} 
            mx={"auto"} 
            my={16} 
            placeholder="Please input the word here with your keyboard .|" 
            focusBorderColor={"green"}
            ref={inputRef} 
        />
        <Text>00:01</Text>
      </Flex>
    </main>
  )
}

export default Training
