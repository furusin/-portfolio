import { Link } from "@chakra-ui/layout";
import React from "react";

export default class TechOutput extends React.Component {
  render() {
    return (
      <div>
        <h1>Tech Output</h1>
        <Qiita />
        <Zenn />
        <SlideShare />
        <SBB />
        <Furyu />
      </div>
    );
  }
}

function Qiita() {
  return (
    <div>
      <Link
        href="https://qiita.com/furusin_oriver"
        target="_blank"
        rel="noreferrer"
      >
        Qiita
      </Link>
    </div>
  );
}

function Zenn() {
  return (
    <div>
      <Link href="https://zenn.dev/furusin" target="_blank" rel="noreferrer">
        Zenn
      </Link>
    </div>
  );
}

function SlideShare() {
  return (
    <div>
      <Link
        href="https://www.slideshare.net/furusin/presentations"
        target="_blank"
        rel="noreferrer"
      >
        SlideShare
      </Link>
    </div>
  );
}

function Furyu() {
  return (
    <div>
      <Link
        href="https://tech.furyu.jp/tags/android/"
        target="_blank"
        rel="noreferrer"
      >
        Furyu Tech Blog
      </Link>
    </div>
  );
}

function SBB() {
  return (
    <div>
      <Link
        href="https://buildersbox.corp-sansan.com/archive/category/Android"
        target="_blank"
        rel="noreferrer"
      >
        Sansan Tech Blog
      </Link>
    </div>
  );
}
