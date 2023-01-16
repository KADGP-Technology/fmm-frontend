import React from "react";
import Blogsection from "./Homecomponent/Blogsection";
import EditorsFavourite from "./Homecomponent/EditorsFavourite";
import HomeArtist from "./Homecomponent/HomeArtist";
import Homeswiper from "./Homecomponent/Homeswiper";
import Newslatter from "./Homecomponent/Newslatter";

function Home() {
  
  return (
    <>
      <Homeswiper />
      <HomeArtist />
      <EditorsFavourite />
      <Newslatter />
      <Blogsection />
    </>
  );
}

export default Home;
