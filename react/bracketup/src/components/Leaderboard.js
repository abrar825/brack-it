import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  Link,
  IconButton,
  Image,
} from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { getPlayers } from "../api/api";
import "../index.css";

function PlayerRows({ players }) {
  players.sort((a, b) => a.rank - b.rank);

  return players.map((player, index) => (
    <Tr>
      <Td className="rank">{player.rank}</Td>
      <Td px={10} className="font-link">
        {player.name}
      </Td>
      <Td className="rank">{player.points}</Td>
    </Tr>
  ));
}

export default function Leaderboard({ players }) {
  return (
    <TableContainer m="20" ml="200" mr="200" bg="#FDF1CB">
      <Table variant="striped" colorScheme="red">
        <Thead bg="blackAlpha.900">
          <Tr>
            <Th textColor="white">Rank</Th>
            <Th px={10} textColor="white">
              Player
            </Th>
            <Th textColor="white">Points</Th>
          </Tr>
        </Thead>
        <Tbody>
          <PlayerRows players={players}></PlayerRows>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
