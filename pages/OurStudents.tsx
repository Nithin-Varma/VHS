
import { Box, Stack, Container, Heading } from "@chakra-ui/react";
import YouTube from "react-youtube";

const VideoGallery = ({ videoIds }) => {
  const youtubeOptions = {
    width: "300px",
    height: "200px",
  };

  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
      {videoIds.map((videoId, index) => (
        <Box key={index} mx="auto" p={4} maxW="300px">
          <YouTube videoId={videoId} opts={youtubeOptions} />
        </Box>
      ))}
    </Box>
  );
};

const MyPage = () => {
  const videoIds = ["CUV6SaLcTIc", "lC1HKwAFxIo", "MTUpKMgMQ-U","9Sdpl10Arw4", "DE1xpW77LTs", "TAxVQNBozyk", "JrieWWnLIfY", "E-xdMRe24QQ", "Qu-PSKD0HLM", "P-Be7cUVuO8", "AwdOOs-fVgk", "yk3f6Pe-8WY", "02Jaw2Y3ags", "/aLDq_rCBs9k"];

  return (
    <Box p={20}>
    <Stack direction="column" align="center" spacing={8}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Our Students
          </Heading>
        </Stack>
      <Box w="100%" maxW="1200px">
        <VideoGallery videoIds={videoIds} />
      </Box>
    </Stack>
    </Box>
  );
};

export default MyPage;
