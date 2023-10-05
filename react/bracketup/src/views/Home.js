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
  const options = ["Netherlands", "Draw", "Senegal"];

  return (
    <Box>
      <Header></Header>
      <Leaderboard></Leaderboard>
    </Box>
  );
}

export default Home;
