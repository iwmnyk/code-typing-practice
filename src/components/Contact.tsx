import { Flex, Text, Box, Heading, Input, Textarea, Button } from "@chakra-ui/react"

const Contact: React.FC = () => {

  return (
    <main>
      <Flex direction={"column"} justifyContent={"center"}>

        <Heading as="h1" fontSize={64} pt={40} pb={10} fontWeight={"normal"} mb={5}>Contact|</Heading>

        <Box textAlign={"left"} w={"40%"} mx={"auto"} my={"2"}>
          <Text mb={2}>お名前</Text>
          <Input placeholder="Input your name." mb={8} />

          <Text mb={2}>メールアドレス</Text>
          <Input placeholder="Input your e-mail." mb={8}  />

          <Text mb={2}>ご用件</Text>
          <Textarea placeholder="Input your comment." mb={8} ></Textarea>

        </Box>

        <Button minW={300} mx={"auto"} letterSpacing={3} colorScheme="green" mb={"4"}>送信</Button>

        <Text color={"#9e9e9e"} fontSize={12}>ごめんなさい。このフォームはダミーです。</Text>

      </Flex>

    </main>
  )
}

export default Contact
