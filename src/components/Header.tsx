import { Flex, Box, Heading, Tabs, TabList, Tab } from "@chakra-ui/react"

const Header: React.FC = () => {

  return (
    <header>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Heading as={"h3"} color={"#9e9e9e"} fontSize={12} fontWeight={"normal"}>日本人プログラミング初学者による日本人プログラミング初学者のためのプログラミング用語タイピング練習ゲーム</Heading>
        </Box>
        <Tabs colorScheme="green">
          <TabList>
            <Tab>Play THIS</Tab>
            <Tab>About THIS</Tab>
            <Tab>Contact</Tab>
          </TabList>
        </Tabs>
      </Flex>

    </header>
  )
}

export default Header
