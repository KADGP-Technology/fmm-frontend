import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Artisthome from "./Pages/Artisthome/Artisthome";
import Artistlogin from "./Pages/Artistlogin/Artistlogin";
import Artistloginmain from "./Pages/Artistlogin/Artistloginmain";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Userpage from "./Pages/User/User";
import Userfav from "./Pages/User/Favourites";
import UserHelp from "./Pages/User/UserHelp";
import Userreq from "./Pages/User/Requirement";
import Userbooking from "./Pages/User/UserBookings";

import BlogList from "./Pages/Blog/BlogList";
import Contact from "./Pages/Contact/Contact";
import Exploreartist from "./Pages/ExpoloreArtist/Exploreartist";
import Faq from "./Pages/faq/Faq";
import Home from "./Pages/Homepage/Home";
import Membership from "./Pages/Membership/Membership";
import PrivacyPolicy from "./Pages/Privacy-Policy/PrivacyPolicy";
import Userlogin from "./Pages/Userlogin/Userlogin";
import Usersignup from "./Pages/Usersignup/Usersignup";
import ArtistLoginpage from "./Pages/Artist/Artist"
import { Navbarroutes } from "./Routes/Navbar/Navbarroutes";

function App() {
  useEffect(() => {
    const head = document.querySelector("body");
    const script = document.createElement("script");
    console.log('app')
    script.setAttribute("src", './Assets/js/custom.js');
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);
  return (
    <>

      <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}

        <Route element={<Navbarroutes hideHeaderPaths={["/userlogin", "/usersignup", '/artistlogin']} />}>


          <Route path="/explore-makeupartist" element={<Exploreartist />}></Route>
          <Route path="/blog" element={<BlogList />}></Route>
          <Route path="/blog-details/:id" element={<BlogDetails />}></Route>




          <Route path="/" element={<Home />}></Route>
        

          <Route path="/artistsignup" element={<Artistlogin />}></Route>
          <Route path="/artistlogin" element={<Artistloginmain />}></Route>

          <Route path="/userlogin" element={<Userlogin />}></Route>
          <Route path="/userpage" element={<Userpage />}></Route>
          <Route path="/Userfav" element={<Userfav />}></Route>
          <Route path="/UserHelp" element={<UserHelp />}></Route>
          <Route path="/Userreq" element={<Userreq />}></Route>
          <Route path="/Userbooking" element={<Userbooking />}></Route>



         <Route path="/usersignup" element={<Usersignup />}></Route>        

          <Route path="/artistcorner" element={<Artisthome />}></Route>

          <Route path="/membership" element={<Membership />} />
          <Route path="/artistloginpage" element={<ArtistLoginpage />} />



          {/* Footer Routes */}
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          {/* <Route path="*" element */}
        </Route>
      </Routes>


    </>
  );
}

export default App;
