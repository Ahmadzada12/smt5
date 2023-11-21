import Logo from "@/component/logo";
import Footer from "@/component/footer";
import { Box, Flex, Button } from "@chakra-ui/react";
export default function Service() {
  return (
    <Box h={"full"}>
      <Logo />
      <Flex
        height="90vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Button
          colorScheme="messenger"
          fontSize={25}
          width={300}
          height={150}
          mb={4}
        >
          Event
        </Button>
        <Button
          colorScheme="gray"
          fontSize={25}
          width={300}
          height={150}
          mb={10}
        >
          Lokasi Alat
        </Button>
      </Flex>
      <Footer />
    </Box>
  );
}
