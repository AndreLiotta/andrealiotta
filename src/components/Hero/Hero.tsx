// Hero.tsx
import React from "react";
import { Box, Flex, Heading, ScaleFade, Text, Image } from "@chakra-ui/react";
import HeroImg from "../../tile_background.png";

const Hero: React.FC = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      w="container.full"
      h="100%"
      ml="24"
    >
      <Box w="80%">
        <Text fontSize="2.8em" mb={2}>
          Hi, my name is
        </Text>
        <Heading as="h1" fontSize="7.5em" letterSpacing="0.1em" mb="1">
          Andrea Liotta.
        </Heading>
        <Text fontSize="2em">
          Transforming Designs into Reality: Your Web Frontend Developer.
        </Text>
      </Box>
      <Image
        src={HeroImg}
        w="40%"
        h="100%"
        objectFit="cover"
        clipPath="polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 20% 50%, 0% 0%)"
      ></Image>
    </Flex>
  );
};

export default Hero;
