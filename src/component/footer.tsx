import { Flex, HStack, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="nav"
      align="center"
      w={"full"}
      padding="1rem"
      bg="white"
      color="#164875"
      position={"fixed"}
      justifyContent={"center"}
    >
      <HStack spacing={"30px"}>
        <Button colorScheme="teal">Home</Button>
        <Button colorScheme="teal">About</Button>
        <Button colorScheme="teal">Contact</Button>
      </HStack>
    </Flex>
  );
}
