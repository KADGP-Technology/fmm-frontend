import React from "react";
import Blogsection from "./Homecomponent/Blogsection";
import EditorsFavourite from "./Homecomponent/EditorsFavourite";
import HomeArtist from "./Homecomponent/HomeArtist";
import Homeswiper from "./Homecomponent/Homeswiper";
import Newslatter from "./Homecomponent/Newslatter";

function Home() {
  
  return (
    <>
    {/* <div>
    <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gNQDMJ9zMZlwzHG87sWF90MsRtY-3lSFMUmHmZy-JTc-_81AMhntlUDjMuziaf4E1UzoRAIEHIsDOUVRaF6_A0c3Clg7w=w1920-h937" alt="" style={{width:'100%'}}/>
    </div> */}
      <Homeswiper />
      <HomeArtist />
      <EditorsFavourite />
      <Newslatter />
      <Blogsection />
    </>
  );
}

export default Home;
