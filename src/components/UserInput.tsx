import { useEffect, useRef } from "react"
import { Input } from "@chakra-ui/react"

interface UserInputProps {
    handleCorrect: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

export const UserInput:React.FC<UserInputProps> = ({handleCorrect}) => {

    const inputRef = useRef<HTMLInputElement | null>(null);
  
    useEffect(() => {
      // ページロード時に Input にフォーカスを当てる
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    return (
        
        <Input 
            onChange={handleCorrect}
            maxW={600} 
            mx={"auto"} 
            my={16} 
            placeholder="Please input the word here with your keyboard .|" 
            focusBorderColor={"green"}
            ref={inputRef} 
        />

    )
}

