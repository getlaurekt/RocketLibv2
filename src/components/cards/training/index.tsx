import React from "react";
import tw from "tailwind-styled-components";

const Card = () => {
  return (
    <Body>
      <Header>
        <Thumbnail src="https://rocketlib.netlify.app/assets/img/DFH_Stadium_arena_preview.png" />
      </Header>
      <Content>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <Text>Text</Text>
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

const Title = tw.h5`
  mt-1
  leading-none
  font-medium
`;

const Subtitle = tw.h6`
  mb-3
  text-slate-600
`;

const Text = tw.p`
  my-1
`;
