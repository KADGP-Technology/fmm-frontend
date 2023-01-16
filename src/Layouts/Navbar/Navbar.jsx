import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const state = useSelector((state) => state.artistloginReducer);
  const userdata = useSelector((state) => state.usersignupreducer);
  const artistdata = useSelector((state) => state.artistdatareducer);
  // console.log({ username, state });
  return (
    <>
      <div className="menu-overlay"></div>
      <header>
        <div className="main-header">
          <div className="container">
            <div className="row">
              <div className="mobile-menu">
                <div className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnssvgjs="http://svgjs.com/svgjs"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 384 384"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                      <path
                        d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                      <path
                        d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mobile-menu-drawer">
                <svg
                  className="close-menu"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlnssvgjs="http://svgjs.com/svgjs"
                  width="16"
                  height="16"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  //   style="enable-background:new 0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g id="_02_User" data-name="02 User">
                      <path
                        d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                      <path
                        d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z"
                        fill="#ffffff"
                        data-original="#ffffff"
                      ></path>
                    </g>
                  </g>
                </svg>
                <ul className="menu-wrapper">
                  <li>
                    <Link to="/explore-makeupartist">
                      Explore Makeup Artists
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/artistcorner">Artist corner</Link>
                  </li>
                </ul>
              </div>
              <div className="logo cursor-pointer">
                <Link to="/">
                  {" "}
                  <img src="../../Assets/images/logo.png" alt="Logo Image" />
                </Link>
              </div>
              <div className="search-bar">
                <input
                  className="search-box-input"
                  type="text"
                  placeholder="Search.."
                  id="search"
                  name="search"
                />
                <button className="search-box-button" aria-label="Search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.84236 13.684C8.36049 13.6837 9.83487 13.1755 11.0307 12.2403L14.7906 16L16 14.7907L12.2401 11.031C13.1758 9.83508 13.6844 8.36043 13.6847 6.84199C13.6847 3.06949 10.6151 0 6.84236 0C3.06965 0 0 3.06949 0 6.84199C0 10.6145 3.06965 13.684 6.84236 13.684ZM6.84236 1.7105C9.67253 1.7105 11.9741 4.01197 11.9741 6.84199C11.9741 9.67201 9.67253 11.9735 6.84236 11.9735C4.01219 11.9735 1.71059 9.67201 1.71059 6.84199C1.71059 4.01197 4.01219 1.7105 6.84236 1.7105Z"
                      fill="white"
                    />
                    <path
                      d="M8.05296 5.63523C8.37712 5.96022 8.55588 6.38956 8.55588 6.84455H10.2665C10.2672 6.39506 10.1789 5.94987 10.0065 5.53472C9.83417 5.11958 9.58124 4.74271 9.26235 4.42591C7.96743 3.13277 5.72228 3.13277 4.42822 4.42591L5.6359 5.63694C6.28592 4.98866 7.40636 4.99037 8.05296 5.63523Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div className="menu-section">
                <ul className="menu-wrapper">
                  <li>
                    <Link to="/explore-makeupartist">
                      Explore Makeup Artists
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/artistcorner">Artist corner</Link>
                  </li>
                </ul>
              </div>
              <div className="login-button">
                {artistdata.profilePhoto ? (
                  <>
                    <img
                      src={artistdata.profilePhoto}
                      style={{ width: "40px" }}
                      alt=""
                      srcset=""
                    />
                  </>
                ) : (
                  <Link to="/userlogin" className="button">
                    login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
