import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    SimpleGrid,
  } from "@chakra-ui/react";
  
  export default function LandingView() {
    return (
      <Flex
        backgroundImage="url(/assets/images/VHS.jpeg)"
        backgroundSize="100%"
        height={{ base: "60vh", md: "80vh" }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        _hover={{
          transform: "scale(0.98)",
          borderColor: "#6C0BA9",
          // filter: "blur(20px)",
          // shadow: "2px 4px 5px #6C0BA9, 2px 4px 5px #6C0BA9",
          boxShadow: "0px 1px 10px 2px #1E90FF, 0 4px 4px 2px #1E90FF",
        }}
      >
        <VStack
          w="full"
          justify="center"
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient="linear(to-r, blackAlpha.600, transparent)"
        >
          <VStack
            maxW={useBreakpointValue({ base: "2xl", md: "4xl" })}
            align="left"
            marginTop="80"
          >
            <Text
              color="whiteAlpha.800"
              fontWeight="extrabold"
              lineHeight={2.2}
              align="center"
              fontFamily="sans-serif"
              textShadow="6px 3px 9px #6C0BA9"
              fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
            >
              We Don&apos;t Teach
            </Text>
            <Text
              color="whiteAlpha.800"
              fontWeight="extrabold"
              lineHeight={2.2}
              align="center"
              fontFamily="sans-serif"
              textShadow="6px 3px 9px #6C0BA9"
              fontSize={useBreakpointValue({ base: "2xl", md: "5xl" })}
            >
              We Educate
            </Text>
          </VStack>
        </VStack>
      </Flex>
    );
  }
  