import { Box, Link } from "@chakra-ui/layout";
import React from "react";

export default class Github extends React.Component {
  render() {
    return (
      <Box>
        <Link
          href="https://github.com/furusin"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </Link>
      </Box>
    );
  }
}
