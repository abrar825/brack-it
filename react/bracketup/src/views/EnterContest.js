import { Input, Box, HStack, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import { SubmitButton } from "../components/PickSubmission";
import { AllPicks } from "../components/AllPicks";

function EnterContest() {
  const teams = {
    A: ["QAT", "ECU", "SEN", "NED"],
    B: ["ENG", "IRN", "USA", "WAL"],
    C: ["ARG", "KSA", "MEX", "POL"],
    D: ["FRA", "AUS", "DEN", "TUN"],
    E: ["ESP", "CRC", "GER", "JPN"],
    F: ["BEL", "CAN", "MAR", "CRO"],
    G: ["BRA", "SRB", "SUI", "CMR"],
    H: ["POR", "GHA", "URU", "KOR"],
  };
  const worldCup2022Groups = [
    // Group A
    // Group B
    // Group C
    // Group D
    // Group E
    // Group F
    // Group G
    // Group H
  ];
  return (
    <Box maxW="100%" bgSize="100%">
      <Header></Header>
      <VStack display="flex" justifyContent="center" maxW="100%">
        <Input
          placeholder="Enter a Name!"
          size="sm"
          width="200px"
          m={4}
        ></Input>
        <AllPicks groups={teams}></AllPicks>
      </VStack>
    </Box>
  );
}

export default EnterContest;
