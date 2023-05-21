
import { Box, Stack } from "@chakra-ui/react";
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
  const videoIds = ["0a1USNHcczI", "lC1HKwAFxIo"];

  return (
    <Stack direction="column" align="center" spacing={4}>
      <h1>Video Gallery</h1>
      <Box w="100%" maxW="1200px">
        <VideoGallery videoIds={videoIds} />
      </Box>
    </Stack>
  );
};

export default MyPage;
