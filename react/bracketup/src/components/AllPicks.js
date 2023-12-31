import { Component } from "react";

import {
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  Select,
  VStack,
  Flex,
} from "@chakra-ui/react";

import {
  Picks,
  ElimPicks,
  AllGroupPicks,
  Example,
  GroupWinners,
} from "../components/PickSubmission";

import "../App.css";

export class AllPicks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupWinners: {
        A1: "A1",
        A2: "A2",
        B1: "B1",
        B2: "B2",
        C1: "C1",
        C2: "C2",
        D1: "D1",
        D2: "D2",
        E1: "E1",
        E2: "E2",
        F1: "F1",
        F2: "F2",
        G1: "G1",
        G2: "G2",
        H1: "H1",
        H2: "H2",
      },

      RO16_Matchups: {
        A1vB2: "",
        C1vD2: "",
        E1vF2: "",
        G1vH2: "",
        B1vA2: "",
        D1vC2: "",
        F1vE2: "",
        H1vG2: "",
      },

      quarterMatchups: {
        A1vB2yC1vD2: "",
        E1vF2yG1vH2: "",
        B1vA2yD1vC2: "",
        F1vE2yH1vG2: "",
      },

      semiMatchups: {
        A1vB2yC1vD2xE1vF2yG1vH2: "",
        B1vA2yD1vC2xF1vE2yH1vG2: "",
      },
    };
  }

  groupWinnerOnClick = (event, groupPos) => {
    let newState = { ...this.state };
    newState.groupWinners[groupPos] = event.target.value;
    this.setState(newState);
    console.log(this.state);
  };

  elimPicksOnClick = (value, level, key) => {
    let newState = { ...this.state };
    newState[level][key] = value;
    this.setState(newState);
    console.log(this.state);
  };

  render() {
    let { groups } = this.props;
    let { RO16_Matchups, groupWinners, quarterMatchups, semiMatchups } =
      this.state;

    return (
      <Box width="90%">
        <HStack justify="center" wrap="wrap" alignItems="center">
          {Object.entries(groups).map(([groupName, countries]) => (
            <VStack ml={3} justify="center" mb={10}>
              <Picks groupName={groupName} teams={countries}></Picks>
              <GroupWinners
                teams={countries}
                groupPos={`${groupName}1`}
                placeholder="Winner"
                onChange={(event) =>
                  this.groupWinnerOnClick(event, `${groupName}1`)
                }
              ></GroupWinners>
              <GroupWinners
                teams={countries}
                groupPos={`${groupName}2`}
                placeholder="Runner Up"
                onChange={(event) =>
                  this.groupWinnerOnClick(event, `${groupName}2`)
                }
              ></GroupWinners>
            </VStack>
          ))}
        </HStack>

        <Flex justifyContent="space-between" width="100%" ml={-5}>
          <Flex
            class="leftBracket"
            justifyContent="flex"
            flexDirection="row"
            alignItems="center"
          >
            <VStack className="elimStack">
              {Object.keys(RO16_Matchups)
                .slice(0, 4)
                .map((key) => (
                  <Example
                    options={[
                      groupWinners[key.split("v")[0]],
                      groupWinners[key.split("v")[1]],
                    ]}
                    onClick={(value) =>
                      this.elimPicksOnClick(value, "RO16_Matchups", key)
                    }
                  ></Example>
                ))}
            </VStack>
            <VStack className="elimStack">
              {Object.keys(quarterMatchups)
                .slice(0, 2)
                .map((key) => (
                  <Example
                    options={[
                      RO16_Matchups[key.split("y")[0]],
                      RO16_Matchups[key.split("y")[1]],
                    ]}
                    onClick={(value) =>
                      this.elimPicksOnClick(value, "quarterMatchups", key)
                    }
                  ></Example>
                ))}
            </VStack>
            <VStack className="elimStack">
              {Object.keys(semiMatchups)
                .slice(0, 1)
                .map((key) => (
                  <Example
                    options={[
                      quarterMatchups[key.split("x")[0]],
                      quarterMatchups[key.split("x")[1]],
                    ]}
                  ></Example>
                ))}
            </VStack>
          </Flex>

          <Flex
            class="rightBracket"
            justifyContent="flex"
            flexDirection="row-reverse"
            alignItems="center"
          >
            <VStack className="elimStack">
              {Object.keys(RO16_Matchups)
                .slice(4, 8)
                .map((key) => (
                  <Example
                    options={[
                      groupWinners[key.split("v")[0]],
                      groupWinners[key.split("v")[1]],
                    ]}
                    onClick={(value) =>
                      this.elimPicksOnClick(value, "RO16_Matchups", key)
                    }
                  ></Example>
                ))}
            </VStack>
            <VStack className="elimStack">
              {Object.keys(quarterMatchups)
                .slice(2, 4)
                .map((key) => (
                  <Example
                    options={[
                      RO16_Matchups[key.split("y")[0]],
                      RO16_Matchups[key.split("y")[1]],
                    ]}
                    onClick={(value) =>
                      this.elimPicksOnClick(value, "quarterMatchups", key)
                    }
                  ></Example>
                ))}
            </VStack>
            <VStack className="elimStack">
              {Object.keys(semiMatchups)
                .slice(1, 2)
                .map((key) => (
                  <Example
                    options={[
                      quarterMatchups[key.split("x")[0]],
                      quarterMatchups[key.split("x")[1]],
                    ]}
                  ></Example>
                ))}
            </VStack>
          </Flex>
        </Flex>
      </Box>
    );
  }
}
