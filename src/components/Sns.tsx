import { Stack } from "@chakra-ui/layout";
import React from "react";
import Eight from "./Eight";
import Github from "./Github";
import Twitter from "./Twitter";

export default class Sns extends React.Component {
  render() {
    return (
      <Stack>
        <h1>SNS</h1>
        <Twitter />
        <Eight />
        <Github />
      </Stack>
    );
  }
}
