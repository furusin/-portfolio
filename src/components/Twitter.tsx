import { Image } from "@chakra-ui/image";
import { Box, Link } from "@chakra-ui/react";
import React from "react";

export default class Twitter extends React.Component {
  render() {
    return (
      <Box>
        <Link
          href="https://twitter.com/furusin_oriver"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </Link>
      </Box>
    );
  }
}
