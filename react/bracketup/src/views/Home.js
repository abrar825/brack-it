import React, { useState, useEffect } from "react";

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
import { getPlayers } from "../api/api.js";

function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const playersData = await getPlayers();
        setPlayers(playersData);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    }

    fetchPlayers();
  }, []);

  return (
    <Box>
      <Header></Header>
      <Leaderboard players={players}></Leaderboard>
    </Box>
  );
}

export default Home;
