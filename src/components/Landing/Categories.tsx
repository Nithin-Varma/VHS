import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  
  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
  }
  
  const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        _hover={{
            transform: "scale(0.98)",
            borderColor: "#1E90FF",
            // filter: "blur(20px)",
            // shadow: "2px 4px 5px #6C0BA9, 2px 4px 5px #6C0BA9",
            boxShadow: "0px 1px 10px 2px #1E90FF, 0 4px 4px 2px #1E90FF",
          }}
          >
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Categories() {
    return (
      <Box p={24}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Check out Our Activities, Achievements, Faculty and so on
          </Heading>
          {/* <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
          </Text> */}
        </Stack>
  
        <Container maxW={'7xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={28} align="center" justify="center">
            <Card
              heading={'Activities'}
              icon={<Icon as={FcAssistant} w={10} h={10} alignContent="center" />}
              description={
                "Activities since it's established."
              }
              href={'#'}
            />
            <Card
              heading={'Events'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'Events that we Conduct in every Academic Year'
              }
              href={'#'}
            />
            <Card
              heading={'Achievements'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'Our Proud moments that achieved by our pupils.'
              }
              href={'#'}
            />
            <Card
              heading={'Faculty'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Our Strength behind VHS'
              }
              href={'#'}
            />
            <Card
              heading={'About Us'}
              icon={<Icon as={FcAbout} w={10} h={10} />}
              description={
                'More info about VHS'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }