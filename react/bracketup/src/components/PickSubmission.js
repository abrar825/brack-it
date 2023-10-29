import {
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

function onSubmit() {}

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "green.300",
          color: "white",
          borderColor: "green.300",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
        width={85}
        onClick={() => props.onClick(props.value)}
        value={props.value}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function Example({ options, onClick }) {
  // const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard {...radio} value={value} onClick={onClick}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

export function Picks({ teams }) {
  let picks = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      let choices = [];
      choices.push(teams[i]);
      choices.push("Draw");
      choices.push(teams[j]);
      picks.push(
        <Example options={choices} onClick={() => console.log()}></Example>
      );
    }
  }
  return picks;
}

export function GroupWinners({ teams, placeholder, onChange }) {
  return (
    <Select
      bg="#B01041"
      color="white"
      width="50%"
      placeholder={placeholder}
      onChange={onChange}
    >
      {teams.map((team, index) => (
        <option key={index} value={team} style={{ color: "black" }}>
          {team}
        </option>
      ))}
    </Select>
  );
}

export function AllGroupPicks({ groups }) {
  return (
    <HStack justify="center" wrap="wrap" align="center" width="75%">
      {Object.entries(groups).map(([groupName, countries]) => (
        <VStack ml={3} justify="center" mb={10}>
          <Picks groupName={groupName} teams={countries}></Picks>
          <GroupWinners
            teams={countries}
            groupPos={`${groupName} + 1`}
          ></GroupWinners>
          <GroupWinners
            teams={countries}
            groupPos={`${groupName} + 2`}
          ></GroupWinners>
        </VStack>
      ))}
    </HStack>
  );
}

export function ElimPicks() {
  let [groupLeaders, setGroupLeader] = useState("");
}
