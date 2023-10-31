import { Input, Box, HStack, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import { SubmitButton } from "../components/PickSubmission";
import { AllPicks } from "../components/AllPicks";

function EnterContest() {
  const teams = {
    A: ["ARG", "BRA", "CRO", "DEN"],
    B: ["ENG", "FRA", "GER", "HUN"],
    C: ["ITA", "JPN", "KOR", "MEX"],
    D: ["NED", "POR", "RUS", "ESP"],
    E: ["SWE", "SUI", "URU", "USA"],
    F: ["BEL", "CHI", "COL", "POL"],
    G: ["CRC", "EGY", "ISL", "NGA"],
    H: ["AUS", "GHA", "IRN", "PER"],
  };
  return (
    <Box bgSize="100%">
      <Header></Header>
      <VStack display="flex" justifyContent="center">
        <Input
          placeholder="Enter a Name!"
          size="sm"
          width="200px"
          m={4}
        ></Input>
        <AllPicks groups={teams}></AllPicks>
        <SubmitButton></SubmitButton>
      </VStack>
    </Box>
  );
}

export default EnterContest;
