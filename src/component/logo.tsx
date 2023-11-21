import { Flex, Spacer, Wrap, WrapItem, Avatar } from "@chakra-ui/react";
export default function Logo() {
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
      Logo
      <Spacer />
      <Wrap>
        <WrapItem fontSize={10}>
          SMART TRANSLATOR TUNANETRA
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
