import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  Link,
  IconButton,
  HStack,
  VStack,
} from "@chakra-ui/react";

import Header from "../components/Header.js";
import Leaderboard from "../components/Leaderboard";
import Example from "../components/PickSubmission";
import Picks from "../components/PickSubmission";

function Home() {
  let players = [
    {
      name: "Abra",
      points: 24,
      rank: 1,
    },
    {
      name: "Ringo",
      points: 12,
      rank: 2,
    },
    {
      name: "Puka",
      points: 11,
      rank: 3,
    },
  ];

  return (
    <Box>
      <Header></Header>
      <Leaderboard players={players}></Leaderboard>
    </Box>
  );
}

export default Home;
