import { Flex, Box, Heading, Tabs, TabList, Tab } from "@chakra-ui/react"
import { Link } from 'react-router-dom'


const Header: React.FC = () => {

  return (
    <header>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Heading as={"h3"} color={"#9e9e9e"} fontSize={12} fontWeight={"normal"}>日本人プログラミング初学者による日本人プログラミング初学者のためのプログラミング用語タイピング練習ゲーム</Heading>
        </Box>
        <Tabs colorScheme="green">
          <TabList>
            <Tab as={Link} to="/" _focus={{ boxShadow: 'none' }} _active={{ boxShadow: 'none' }}>HOME</Tab>
            <Tab as={Link} to="/About" _focus={{ boxShadow: 'none' }} _active={{ boxShadow: 'none' }}>About THIS</Tab>
            <Tab as={Link} to="/Contact" _focus={{ boxShadow: 'none' }} _active={{ boxShadow: 'none' }}>Contact</Tab>
          </TabList>
        </Tabs>
      </Flex>

    </header>
  )
}

export default Header
