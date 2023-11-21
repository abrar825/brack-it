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
  SubmitButton,
} from "../components/PickSubmission";

import "../App.css";
import "../api/api.js";
import { insertUser } from "../api/api.js";

export class AllPicks extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      name: "Adara",

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

      champion: "",
    };
  }

  groupStagePicks = {};

  /**
   *
   * @param {*} event
   * @param {*} groupPos
   */
  groupWinnerOnClick = (event, groupPos) => {
    let newState = { ...this.state };
    newState.groupWinners[groupPos] = event.target.value;
    this.setState(newState);
    console.log(this.state);
  };

  /**
   *
   * @param {string} value
   * @param {string} level
   * @param {string} key
   */
  elimPicksOnClick = (value, level, key) => {
    let newState = { ...this.state };

    if (key == null) {
      newState[level] = value;
    } else {
      newState[level][key] = value;
    }
    this.setState(newState);
    console.log(this.state);
  };

  groupStagePickOnClick = (value, id) => {
    this.groupStagePicks[id] = value;
    console.log(this.groupStagePicks);
  };

  submitOnClick = () => {
    let submission = {
      name: this.name,
      picks: this.groupStagePicks,
      email: "hey@yer.com",
      points: 3,
    };
    insertUser(submission);
  };

  render() {
    let { groups } = this.props;
    let { RO16_Matchups, groupWinners, quarterMatchups, semiMatchups } =
      this.state;

    return (
      <Box width="90%" justifyContent="center">
        <HStack justify="center" wrap="wrap" alignItems="center">
          {Object.entries(groups).map(([groupName, countries]) => (
            <VStack ml={3} justify="center" mb={10}>
              <Picks
                groupName={groupName}
                teams={countries}
                onClick={(value, id) => this.groupStagePickOnClick(value, id)}
              ></Picks>
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

        <HStack>
          <VStack justifyContent="space-between" mx="auto">
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
                      onClick={(value) =>
                        this.elimPicksOnClick(value, "semiMatchups", key)
                      }
                    ></Example>
                  ))}
              </VStack>
            </Flex>

            <Flex
              class="rightBracket"
              justifyContent="flex"
              flexDirection="row"
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
                      onClick={(value) =>
                        this.elimPicksOnClick(value, "semiMatchups", key)
                      }
                    ></Example>
                  ))}
              </VStack>
            </Flex>
          </VStack>
          <Example
            options={[
              semiMatchups["A1vB2yC1vD2xE1vF2yG1vH2"],
              semiMatchups["B1vA2yD1vC2xF1vE2yH1vG2"],
            ]}
            onClick={(value) => this.elimPicksOnClick(value, "champion", null)}
          ></Example>
        </HStack>
        <SubmitButton
          ml={650}
          mb={5}
          onClick={this.submitOnClick}
        ></SubmitButton>
      </Box>
    );
  }
}
