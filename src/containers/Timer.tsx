import { useState, useEffect } from "react"
import { Text } from "@chakra-ui/react"

interface TimerProps {
  isActive: boolean;
}

export const Timer: React.FC<TimerProps> = ({ isActive }) => {

    const [seconds, setSeconds] = useState<number>(0);

    const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null); // intervalIDの状態をuseStateで管理

  useEffect(() => {
    if (isActive) {
      setSeconds(0); //初期化
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalID(id); // setIntervalで取得したIDをセットする
    } else {
      if (intervalID) {
        clearInterval(intervalID); // intervalIDがnullでなければclearIntervalを実行
      }
    }
    return () => {
      if (intervalID) {
        clearInterval(intervalID); // コンポーネントがアンマウントされるときにもclearIntervalを実行
      }
    };
  }, [isActive, intervalID]);

    return <Text >{seconds}s</Text>
      
}

