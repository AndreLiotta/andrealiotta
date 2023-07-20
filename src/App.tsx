import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider>
    <Box textAlign="center" fontSize="xl">
      <Text>Hi! I'm Andrea Liotta</Text>
    </Box>
  </ChakraProvider>
)
