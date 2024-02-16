import { useState } from 'react'
import { Flex, Text, Heading, Select, Button } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {

  const [selectedValue, setSelectedValue] = useState('javascript_beginner');
  const navigate = useNavigate()

  const handleStartTraining = () => {
    navigate(`/training/${selectedValue}`)
  }

  return (
    <main>
      <Flex direction={"column"} justifyContent={"center"}>

        <Heading as="h1" fontSize={64} pt={40} pb={10} fontWeight={"normal"}>CODE TYPING practice|</Heading>

        <Heading as="h2" fontSize={36} pb={20} fontWeight={"normal"}>for programming beginners|</Heading>

        <Text>Select your favorite language for programming.</Text>

        <Select maxW={300} mx={"auto"} my={10} focusBorderColor={"green"} value={selectedValue} onChange={(e)=>{setSelectedValue(e.target.value)} }>
            <option value="javascript_beginner">javascript -初心者向け-</option>
            <option value="html5_selectors">HTML5 -要素-</option>
            <option value="html5_withAttrbutes">HTML5 -属性-</option>
            {/* <option value="php">php</option>
            <option value="python">python</option>
            <option value="Ruby + Ruby on Rails">Ruby + Ruby on Rails</option> */}
        </Select>

        <Button onClick={handleStartTraining} minW={300} mx={"auto"} letterSpacing={3} colorScheme="green" mb={10}>START!</Button>

        <Text color={"#9e9e9e"}>Playing for PC ONLY.</Text>

      </Flex>

    </main>
  )
}

export default Home
