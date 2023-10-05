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
import "../App.css";

import { useNavigate } from "react-router-dom";

import neonSpace from "../resources/cupLogo.png";

export default function Header() {
  let history = useNavigate();

  let navigate = () => {
    history("/EnterContest");
  };

  let navHome = () => {
    history("/");
  };
  return (
    <Box
      height="65px"
      width="100%"
      bgGradient="linear(to-r, #FDF1CB, #B01041)"
      display="flex"
      boxShadow="md"
    >
      <Image
        src={neonSpace}
        backgroundColor="transparent"
        height="100%"
        object-fit="contain"
      ></Image>
      <Button bg="BlackAlpha.900" onClick={navHome} m="3" ml="5" size="md">
        Home
      </Button>
      <Button bg="BlackAlpha.900" m="3" ml="5" size="md">
        Leaderboard
      </Button>
      <Button bg="BlackAlpha.900" m="3" ml="5" size="md">
        Picks
      </Button>
      <Button bg="BlackAlpha.900" onClick={navigate} m="3" ml="5" size="md">
        Enter Contest
      </Button>
    </Box>
  );
}
