// Topbar.js
import React from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Logo from "../../Logo.png";
import "./Topbar.css";

const Topbar = () => {
  const handleScrollToAnchor = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const anchor = document.querySelector(
      event.currentTarget.getAttribute("href") || ""
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      height="fit-content"
      padding="1em"
      id="top"
    >
      <Box animation="spin 10s linear infinite">
        <Link onClick={handleScrollToAnchor} href="#top">
          <Image src={Logo} h="6em"></Image>
        </Link>
      </Box>
      <Flex as="nav" fontWeight="500" fontSize="1.2em">
        <Link
          mr="4"
          href="#aboutMe"
          className="cta"
          onClick={handleScrollToAnchor}
        >
          <Text className="hover-underline-animation">About me</Text>
        </Link>
        <Link
          mr="4"
          href="#aboutMe"
          className="cta"
          onClick={handleScrollToAnchor}
        >
          <Text className="hover-underline-animation">Education</Text>
        </Link>
        <Link
          mr="4"
          href="#aboutMe"
          className="cta"
          onClick={handleScrollToAnchor}
        >
          <Text className="hover-underline-animation">Experience</Text>
        </Link>
        <Link
          mr="4"
          href="#aboutMe"
          className="cta"
          onClick={handleScrollToAnchor}
        >
          <Text className="hover-underline-animation">Contact</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Topbar;
