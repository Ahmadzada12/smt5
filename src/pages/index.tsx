import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Spacer,
  Wrap,
  WrapItem,
  HStack,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Footer from "@/component/footer";
import Logo from "@/component/logo";

export default function Home() {
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
          Get Active
        </Button>
        <Button colorScheme="messenger" fontSize={25} width={300} height={150}>
          Lokasi Alat
        </Button>
      </Flex>
      <Footer />
    </Box>
  );
}
