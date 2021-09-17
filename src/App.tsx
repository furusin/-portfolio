import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Twitter from "./components/Twitter";
import Github from "./components/Github";
import Eight from "./components/Eight";
import {
  AlertDialogOverlay,
  ChakraProvider,
  Flex,
  Input,
} from "@chakra-ui/react";
import BriefInfo from "./components/BriefInfo";
import Sns from "./components/Sns";
import TechOutput from "./components/TechOutput";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <BriefInfo />
      <Sns />
      <TechOutput />
      <Footer />
    </div>
  );
}

export default App;
