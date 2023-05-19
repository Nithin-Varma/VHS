import { 
  Box,
  Container,
  Flex,
  Stack,
  Heading,
  useBreakpointValue,
 } from "@chakra-ui/react";

import YouTube from "react-youtube";

const VideoGallery = ({ videoIds }) => {
  return (
    <Box w="100%" maxW="800px" mx="auto">
      <Stack maxW={useBreakpointValue({ base: "xl", md: "xl" })}>
      <Container maxW={'7xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={28} align="center" justify="center">
          {videoIds.map((videoId, index) => (
            <Box key={index}>
              <YouTube videoId={videoId} />
            </Box>
          ))}
        </Flex>
      </Container>
      </Stack>
    </Box>
  );
};

const MyPage = () => {
  const videoIds = [
    "0a1USNHcczI", 
    "0a1USNHcczI", 
    "0a1USNHcczI"
  ];

  return (
    <>
    <Box p={24}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Check out Our Activities, Achievements, Faculty and so on
          </Heading>
        </Stack>
    <Container maxW={'7xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={28} align="center" justify="center">
                <VideoGallery videoIds={videoIds} />
            
            </Flex>
            </Container>
            </Box>
    </>
  );
};

export default MyPage;
