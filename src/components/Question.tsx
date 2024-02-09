import { Box, Text } from "@chakra-ui/react"

interface questionProps {
    count: number,
    question: string
}

export const Question: React.FC<questionProps> = ({count, question}) => {
    return (
        
        <Box>
            <Text mt={48}>{count}/10</Text>
            <Text fontSize={"xxx-large"} my={2}>{question}</Text>
        </Box>

    )
}

