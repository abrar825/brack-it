import { Input, Box, HStack, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import { SubmitButton } from "../components/PickSubmission";
import { AllPicks } from "../components/AllPicks";
import { useNavigate } from "react-router-dom";

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

  const AllPicksWrapper = (props) => {
    const navigate = useNavigate();

    return <AllPicks navigate={navigate} {...props}></AllPicks>;
  };
  return (
    <Box maxW="100%" bgSize="100%">
      <Header></Header>
      <VStack display="flex" justifyContent="center" maxW="100%">
        <AllPicksWrapper groups={teams}></AllPicksWrapper>
      </VStack>
    </Box>
  );
}

export default EnterContest;
