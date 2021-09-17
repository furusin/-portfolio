import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import React from "react";

export default class BriefInfo extends React.Component {
  render() {
    return (
      <div>
        <TwitterIcon />
        <Name />
        <Introduce />
      </div>
    );
  }
}

function TwitterIcon() {
  return (
    <Box boxSize="sm">
      <Image src="https://pbs.twimg.com/profile_images/1313631220714991617/yiJJFLQB_400x400.jpg" />
    </Box>
  );
}

function Name() {
  return (
    <Box>
      <Box textStyle="h1">古川 真次 / Shinji Furukawa</Box>
      <Box>known as furusin</Box>
    </Box>
  );
}

function Introduce() {
  return (
    <Box>
      HT-03AからAndroidが好き。 <br />
      ドナルドのモフケツを追うのが生きがい。
      <br />
      Kansai.kt、GDGOsakaのCoオーガナイザー
    </Box>
  );
}
