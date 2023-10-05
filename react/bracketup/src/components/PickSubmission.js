import {
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  Select,
  VStack,
} from "@chakra-ui/react";

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
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function Example({ options }) {
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
          <RadioCard key={value} {...radio}>
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
      picks.push(<Example options={choices}></Example>);
    }
  }
  return picks;
}

export function ElimPicks({ teams }) {
  return (
    <Select bg="#B01041" color="white" width="50%">
      {teams.map((team, index) => (
        <option key={index} value={team}>
          {team}
        </option>
      ))}
    </Select>
  );
}

export function AllGroupPicks({ groups }) {
  return (
    <HStack wrap="wrap">
      {groups.map((group, index) => (
        <VStack ml={3} align="left" mb={10}>
          <Picks teams={group}></Picks>
          <ElimPicks teams={group}></ElimPicks>
          <ElimPicks teams={group}></ElimPicks>
        </VStack>
      ))}
    </HStack>
  );
}
