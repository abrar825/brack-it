import { Input, Box, HStack, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import { Picks, ElimPicks, AllGroupPicks } from "../components/PickSubmission";

function EnterContest() {
  const teams = [
    ["NED", "SEN", "QAT", "ECU"],
    ["ENG", "IRN", "WAL", "USA"],
    ["ARG", "KSA", "MEX", "POL"],
    ["BRA", "SRB", "SUI", "ROK"],
    ["CAN", "MAR", "AUS", "NEW"],
    ["CAN", "MAR", "AUS", "NEW"],
  ];
  return (
    <Box bgSize="100%">
      <Header></Header>
      <Input placeholder="Enter a Name!" size="sm" width="200px" m={4}></Input>
      <AllGroupPicks groups={teams}></AllGroupPicks>
    </Box>
  );
}

export default EnterContest;
