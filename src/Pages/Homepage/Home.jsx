import React from "react";
import './Home.css'
import b from '../../Assets/images/Banner2.jpeg'



function Home() {
  
  return (
    <>
    <div className="banner-img-container">
    <img src={b} alt="" style={{width:'100%'}} className="banner-img" />
    </div>
      {/* <Homeswiper />
      <HomeArtist />
      <EditorsFavourite />
      <Newslatter />
      <Blogsection /> */}
    </>
  );
}

export default Home;
