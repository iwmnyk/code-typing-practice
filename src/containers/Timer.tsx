import { useState, useEffect } from "react"
import { Text } from "@chakra-ui/react"



export const Timer = () => {

    const [timer, setTimer] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
      let intervalID: NodeJS.Timeout;
    });

    return <Text ></Text>
      
}

