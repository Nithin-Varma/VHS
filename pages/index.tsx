import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Home() {
  return (
   <>
    <Flex
      w={'full'}
      h={'70vh'}
      
      backgroundImage={
        'url(/assets/images/VHS.jpeg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      >
      <VStack
        marginTop={'80'}
        w={'full'}
        justify={'center'}
        
        px={useBreakpointValue({ base: 4, md: 8 })}
        // bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
        <Stack  align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            dropShadow={'dark-lg'}
            textShadow='9px 5px 10px black' m='32'
            fontSize={useBreakpointValue({ base: '5xl', md: '6xl' })}>
            We don't Teach,{' '} 
            <br/>
            <Text as={'span'} color={'blue.500'} >We Educate</Text>
          </Text>
        </Stack>
      </VStack>
    </Flex>
   </>
  );
}
