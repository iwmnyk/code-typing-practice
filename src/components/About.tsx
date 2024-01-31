import { Flex, Text, Heading } from "@chakra-ui/react"

const Home: React.FC = () => {

  return (
    <main>
      <Flex direction={"column"} justifyContent={"center"}>

        <Heading as="h1" fontSize={64} pt={40} pb={10} fontWeight={"normal"} mb={5}>What’s CODE TYPING practice?|</Heading>

        <Text color={"#9e9e9e"} textAlign={"left"} maxW={"50%"} mx={"auto"} lineHeight={1.5}>
          タイピング速度を上げることは、PCスキル習得の大事な要件です。<br />
          <br />
          それはきっとプログラミングをする上でも同じです。<br />
          <br />
          しかし、日本人は日本語以外のタイピングをする機会があまりないため、プログラミング初学者にとって、不慣れな英単語のタイピングをすること自体がプログラミング学習のハードルとなっているのではないかと考えました。<br />
          <br />
          スキマ時間にゲーム感覚で練習できるプログラミング用タイピング練習アプリがあったらなぁ……。<br />
          <br />
          そんな思いでアプリ開発の練習がてらに作りました。<br />
          <br />
          共感してくれた初学者の方、一緒に頑張りましょう！
        </Text>
        <Text color={"#9e9e9e"} textAlign={"right"} w={"48%"} mx={"auto"} mt={4} lineHeight={1.5}>by iwmnyk</Text>

      </Flex>

    </main>
  )
}

export default Home
