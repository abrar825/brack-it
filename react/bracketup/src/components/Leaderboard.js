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

function PlayerRows({ players }) {
  return players.map((player, index) => (
    <Tr>
      <Td>{player.rank}</Td>
      <Td>{player.name}</Td>
      <Td>{player.points}</Td>
    </Tr>
  ));
}

export default function Leaderboard() {
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
    <TableContainer m="20" ml="200" mr="200" bg="#B01041">
      <Table variant="striped" colorScheme="red">
        <Thead bg="blackAlpha.900">
          <Tr>
            <Th textColor="white">Rank</Th>
            <Th textColor="white">Player</Th>
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
