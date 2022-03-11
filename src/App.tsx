import React from "react";
import "./App.css";
import tw from "tailwind-styled-components";
import Card from "./components/cards/training/index";

const App = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

export default App;

const Container = tw.div`
  flex
  flex-col
  items-center
  justify-center
  h-screen
`;
