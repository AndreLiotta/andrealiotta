import React from "react";
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import "@fontsource/bebas-neue";
import "@fontsource-variable/montserrat";
import { extendTheme } from "@chakra-ui/react";
import Topbar from "./components/Topbar/Topbar";
import Hero from "./components/Hero/Hero";
import heroImg from "./heroImg.jpg";

const theme = extendTheme({
  fonts: {
    heading: `'Bebas Neue', sans-serif`,
    body: `'Montserrat Variable', sans-serif`,
  },
  colors: {
    background: "#F4E6B9",
    text: "#28282d",
  },
  styles: {
    global: {
      body: {
        bg: "#F4E6B9",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex" flexFlow="column" h="100vh">
        <Box>
          <Topbar></Topbar>
        </Box>
        <Box flexGrow="1">
          <Hero></Hero>
        </Box>
      </Box>

      <Container maxW="full" mt="8">
        <Box textAlign="center" fontSize="xl" fontWeight="regular">
          <Text id="aboutMe">
            Hello there! I'm Andrea Liotta, a passionate frontend developer with
            a strong focus on web development using React. I thrive on creating
            captivating and user-friendly interfaces that leave a lasting
            impression. Currently, I am fortunate to be part of the talented
            team at EF, based in the beautiful city of Zurich.
          </Text>

          <Text my="4">
            With a keen eye for detail and a flair for innovation, I love
            turning complex ideas into elegant and efficient code. My journey in
            the world of web development has been a fascinating one, and I am
            constantly seeking opportunities to expand my skills and explore new
            technologies to stay at the forefront of this ever-evolving field.
          </Text>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
