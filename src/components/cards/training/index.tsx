import React from "react";
import tw from "tailwind-styled-components";
import TrainingLabel from "../../labels/training/styled.label";

const Card = () => {
  return (
    <Body>
      <Header>
        <Thumbnail src="https://rocketlib.netlify.app/assets/img/DFH_Stadium_arena_preview.png" />
      </Header>
      <Content>
        <Title>Hall of Rockets #1</Title>
        <Subtitle>Hexzi</Subtitle>
        <TrainingLabel>Hehe</TrainingLabel>
      </Content>
      <Footer></Footer>
    </Body>
  );
};

export default Card;

const Body = tw.div`
  select-none
  relative
  flex
  flex-col
  items-center;
  word-wrap: break-word;
  w-[250px]
  max-h-[400px]
  min-h-[300px]
  p-4
  rounded
  shadow-material-lg
  hover:shadow-material-hover
  hover:-translate-y-[10px]
  transition-[shadow, transform]
  ease-in-out
  duration-300
  }
`;

const Header = tw.div``;

const Thumbnail = tw.img`
  w-full
  h-auto
  rounded
`;

const Content = tw.div`
  flex-auto
  w-full
  py-1
  px-2
`;

const Footer = tw.div`
  py-4
  px-6
`;

const Title = tw.h4`
  mt-1
  text-xl
  leading-none
  font-medium
`;

const Subtitle = tw.h6`
  mb-3
  text-sm
  text-slate-600
`;
