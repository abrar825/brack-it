import { Component } from "react";

import {
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  Select,
  VStack,
  Flex,
  toast,
  Input,
} from "@chakra-ui/react";
import { useToast, createStandaloneToast } from "@chakra-ui/react";

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
import { useNavigate } from "react-router-dom";

export class AllPicks extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      name: "",

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

  validateSubmission = () => {
    let {
      groupStagePicks,
      groupWinners,
      RO16_Matchups,
      quarterMatchups,
      semiMatchups,
      champion,
    } = this.state;

    if (Object.keys(groupStagePicks).length < 48) {
      return { valid: false };
    }

    for (let team in Object.values(RO16_Matchups)) {
      if (!team) return { valid: false };
    }

    for (let team in Object.values(quarterMatchups)) {
      if (!team) return { valid: false };
    }

    for (let team in Object.values(semiMatchups)) {
      if (!team) return { valid: false };
    }

    if (!champion) return { valid: false };

    return { valid: true };
  };

  submitOnClick = async () => {
    const { ToastContainer, toast } = createStandaloneToast();

    let submission = {
      name: this.state.name,
      picks: {
        groupStagePicks: this.groupStagePicks,
        groupWinners: this.state.groupWinners,
        RO16_Matchups: this.state.RO16_Matchups,
        quarterMatchups: this.state.quarterMatchups,
        semiMatchups: this.state.semiMatchups,
        champion: this.state.champion,
      },
      email: "hey@yer.com",
      points: 0,
    };

    try {
      const response = insertUser(submission);
      if (response.status == 201) {
        toast({
          title: "Successfully submitted!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        this.props.navigate("/");
      } else {
        toast({
          title: "Submission failed.",
          description: "Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      console.log(response);
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  render() {
    let { groups } = this.props;
    let { RO16_Matchups, groupWinners, quarterMatchups, semiMatchups } =
      this.state;

    return (
      <Box width="90%" justifyContent="center">
        <VStack>
          <Input
            placeholder="Enter a Name!"
            size="sm"
            width="200px"
            mt={4}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          ></Input>
          <Input
            placeholder="Enter your Email."
            size="sm"
            width="200px"
            m={2}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          ></Input>
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
              onClick={(value) =>
                this.elimPicksOnClick(value, "champion", null)
              }
            ></Example>
          </HStack>
          <SubmitButton
            ml={650}
            mb={5}
            onClick={this.submitOnClick}
          ></SubmitButton>
        </VStack>
      </Box>
    );
  }
}
